import React from "react";
import firebase from ".././init-firebase";
import Selections from "./Selections";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  onSnapshot,
  query,
  where
} from "firebase/firestore";

const firestore = getFirestore(firebase);
class App extends React.Component {
  state = { properties: [] };
  componentDidMount = () => {
    this.props.auth !== undefined &&
      onSnapshot(
        query(
          collection(firestore, "properties"),
          where("authorId", "==", this.props.auth.uid)
        ),
        (querySnapshot) => {
          this.setState({
            properties: [
              "",
              ...querySnapshot.docs.map((dc) => {
                return { ...dc.data(), id: dc.id };
              })
            ]
          });
        }
      );
  };
  render() {
    const space = " ";
    return this.props.auth === undefined ? (
      "login to begin building"
    ) : (
      <div>
        {this.state.chosenProperty && (
          <div>
            Share this link:{space}
            <a
              href={window.location.href + this.state.chosenProperty}
              onClick={() => {
                //window.alert(window.location.href + this.state.chosenProperty);
              }}
            >
              selections.pro/{this.state.chosenProperty}
            </a>
          </div>
        )}
        <div style={{ display: "flex" }}>
          <select
            onChange={(e) => {
              this.setState({ chosenProperty: e.target.value });
            }}
          >
            {this.state.properties.map((x) => {
              return (
                <option key={"property" + x.id} value={x.id}>
                  {x.name}
                </option>
              );
            })}
          </select>
          {this.state.newProperty ? (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                addDoc(collection(firestore, "properties"), {
                  name: this.state.newPropertyName,
                  authorId: this.props.auth.uid
                }).then(() => this.setState({ newPropertyName: "" }));
              }}
            >
              <input
                placeholder="New property name"
                value={this.state.newPropertyName}
                onChange={(e) =>
                  this.setState({ newPropertyName: e.target.value })
                }
              />
            </form>
          ) : (
            <div onClick={() => this.setState({ newProperty: true })}>+</div>
          )}
        </div>
        {this.state.chosenProperty ? (
          <Selections
            property={this.state.properties.find(
              (x) => x.id === this.state.chosenProperty
            )}
            chosenProperty={this.state.chosenProperty}
            auth={this.props.auth}
          />
        ) : (
          <div style={{ color: "grey" }}>select a property</div>
        )}
      </div>
    );
  }
}
export default App;
