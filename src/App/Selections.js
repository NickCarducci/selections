import {
  addDoc,
  collection,
  getFirestore,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import React from "react";
import firebase from ".././init-firebase";
import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import {
  deleteObject,
  getDownloadURL,
  getStorage,
  ref,
  uploadBytes
} from "firebase/storage";
import { deleteField } from "firebase/firestore";
import { arrayUnion } from "firebase/firestore";
import { arrayRemove } from "firebase/firestore";

const firestore = getFirestore(firebase);

class Selection extends React.Component {
  state = { trim: [], siding: [], exteriorDoors: [] };
  componentDidMount = () => {
    onSnapshot(
      query(
        collection(firestore, this.props.selection),
        where("propertyId", "==", this.props.chosenProperty)
      ),
      (querySnapshot) => {
        this.setState({
          [this.props.selection]: querySnapshot.docs.map((dc) => {
            return { ...dc.data(), id: dc.id };
          })
        });
      }
    );
  };
  render() {
    const { selection } = this.props,
      space = " ";
    const pathReference = `selectionPhotos/${this.props.auth.uid}/*`;
    return (
      <div>
        {selection.charAt(0).toUpperCase() + selection.slice(1)}
        <div
          onClick={() => {
            const answer = window.confirm("Delete selection?");
            answer &&
              updateDoc(
                doc(firestore, "properties", this.props.chosenProperty),
                {
                  selections: arrayRemove(this.props.selection)
                }
              );
          }}
          style={{
            height: "min-content",
            width: "30px",
            textAlign: "center",
            border: "2px solid"
          }}
        >
          &times;
        </div>
        <div style={{ display: "block" }}>
          {this.state[selection].map((opt) => {
            return (
              <div style={{ display: "flex" }} key={opt.id}>
                <div
                  onClick={() => {
                    const answer = window.confirm("Delete option?");
                    answer &&
                      deleteDoc(doc(firestore, this.props.selection, opt.id));
                  }}
                  style={{
                    height: "min-content",
                    width: "30px",
                    textAlign: "center",
                    border: "2px solid"
                  }}
                >
                  &times;
                </div>
                {opt.photo ? (
                  <img
                    style={{ width: "100px" }}
                    src={opt.photo}
                    alt={opt.photo}
                    onClick={() => {
                      const answer = window.confirm("Delete photo?");
                      console.log(opt.photo);
                      answer &&
                        deleteObject(ref(getStorage(), opt.photo))
                          .then(() => {
                            updateDoc(
                              doc(firestore, this.props.selection, opt.id),
                              {
                                photo: deleteField()
                              }
                            );
                          })
                          .catch((error) => {});
                    }}
                  />
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      updateDoc(doc(firestore, this.props.selection, opt.id), {
                        price: this.state["new" + opt.id + "Price"]
                      });
                    }}
                  >
                    <input
                      style={{
                        margin: "3px",
                        maxWidth: "calc(100% - 6px)",
                        width: "min-content",
                        borderRadius: "2px"
                        //border: "3px solid blue"
                      }}
                      type="file"
                      onChange={async (event) => {
                        // Update the state
                        // const fileReader = new window.FileReader();
                        var answer = window.confirm("begin upload?");
                        if (answer) {
                          var file = event.target.files[0];
                          if (file) {
                            const { type } = file;
                            console.log("file " + type, file);
                            if (type.includes("image")) {
                              const blob = new Blob([file], {
                                  type
                                }),
                                url = window.URL.createObjectURL(blob);
                              console.log("blob url", url);
                              //const { newPhoto } = this.state;
                              if (!file.name) return null;
                              if (file.name.includes("/"))
                                return window.alert("/ forbidden in title");
                              console.log("newPhoto type", file.type);
                              var filename = file.name; //+ x.type.split("/")[1].toLowerCase();
                              const itemRef = ref(
                                getStorage(),
                                pathReference + "/" + filename
                              );
                              await uploadBytes(itemRef, blob)
                                .then(async (snapshot) => {
                                  console.log(snapshot);
                                  console.log(
                                    filename + " added to " + pathReference
                                  );
                                  const gsUrl = await getDownloadURL(itemRef);
                                  gsUrl &&
                                    updateDoc(
                                      doc(
                                        firestore,
                                        this.props.selection,
                                        opt.id
                                      ),
                                      {
                                        photo: gsUrl
                                        /*"https://firebasestorage.googleapis.com/v0/b/" +
                                      snapshot.ref._location.bucket +
                                      "/" +
                                      snapshot.ref._location.path_*/
                                      }
                                    );
                                })
                                .catch((err) => console.log(err));
                            } else
                              return window.alert(
                                `unsupported file type ${type}`
                              );
                          }
                        }
                      }}
                    />
                  </form>
                )}
                <div>
                  {opt.name}
                  <br />
                  {this.state["new" + opt.id + "Price"] !== undefined ||
                  !opt.price ? (
                    <div>
                      $
                      <input
                        value={this.state["new" + opt.id + "Price"]}
                        onChange={(e) =>
                          this.setState({
                            ["new" + opt.id + "Price"]: e.target.value
                          })
                        }
                        placeholder="price"
                        type="number"
                        step=".01"
                        min="0"
                      />
                      {opt.price && (
                        <div
                          onClick={() =>
                            this.setState({
                              ["new" + opt.id + "Price"]: undefined
                            })
                          }
                          style={{
                            width: "max-content",
                            textAlign: "center",
                            border: "2px solid"
                          }}
                        >
                          &times;
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      onClick={() =>
                        this.setState({ ["new" + opt.id + "Price"]: "" })
                      }
                    >
                      ${opt.price}
                    </div>
                  )}
                  {this.state["new" + opt.id + "Link"] !== undefined ||
                  !opt.link ? (
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        updateDoc(
                          doc(firestore, this.props.selection, opt.id),
                          {
                            link: this.state["new" + opt.id + "Link"]
                          }
                        );
                      }}
                    >
                      <input
                        value={this.state["new" + opt.id + "Link"]}
                        onChange={(e) =>
                          this.setState({
                            ["new" + opt.id + "Link"]: e.target.value
                          })
                        }
                        placeholder="link to product page"
                      />
                      {opt.link && (
                        <div
                          onClick={() =>
                            this.setState({
                              ["new" + opt.id + "Link"]: undefined
                            })
                          }
                          style={{
                            width: "max-content",
                            textAlign: "center",
                            border: "2px solid"
                          }}
                        >
                          &times;
                        </div>
                      )}
                    </form>
                  ) : (
                    <div
                      onClick={() =>
                        this.setState({
                          ["new" + opt.id + "Link"]: ""
                        })
                      }
                    >
                      {opt.link}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
        {this.state["new" + selection] ? (
          <form
            style={{ display: "flex" }}
            onSubmit={(e) => {
              e.preventDefault();
              addDoc(collection(firestore, "trim"), {
                name: this.state["new" + selection + "Name"],
                propertyId: this.props.chosenProperty,
                authorId: this.props.auth.uid
              });
            }}
          >
            <input
              required
              placeholder={"New " + selection + " name"}
              value={this.state["new" + selection + "Name"]}
              onChange={(e) =>
                this.setState({
                  ["new" + selection + "Name"]: e.target.value
                })
              }
            />
            <div
              onClick={() => this.setState({ ["new" + selection]: false })}
              style={{
                width: "max-content",
                textAlign: "center",
                border: "2px solid"
              }}
            >
              &times;
            </div>
          </form>
        ) : (
          <div
            onClick={() => this.setState({ ["new" + selection]: true })}
            style={{
              width: "100px",
              height: "60px",
              textAlign: "center",
              border: "2px solid"
            }}
          >
            +
          </div>
        )}
      </div>
    );
  }
}

class Selections extends React.Component {
  state = {};
  render() {
    //const selections = ["trim", "siding", "exteriorDoors", "exteriorLights"];
    return (
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            updateDoc(doc(firestore, "properties", this.props.chosenProperty), {
              selections: arrayUnion(this.state.newSelection)
            });
          }}
        >
          <input
            value={this.state.newSelection}
            onChange={(e) => this.setState({ newSelection: e.target.value })}
            placeholder="New Selection"
          />
        </form>
        {[
          "trim",
          "siding",
          ...(this.props.property.selections
            ? this.props.property.selections
            : [])
        ].map((selection) => (
          <Selection
            key={selection}
            selection={selection}
            auth={this.props.auth}
            chosenProperty={this.props.chosenProperty}
          />
        ))}
      </div>
    );
  }
}
export default Selections;
