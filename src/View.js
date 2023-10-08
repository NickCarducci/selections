import {
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  where
} from "firebase/firestore";
import React from "react";
import firebase from "./init-firebase";

class Trim extends React.Component {
  state = {};
  componentDidMount = () => {
    onSnapshot(
      query(
        collection(firestore, this.props.selection),
        where("propertyId", "==", this.props.property.id)
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
    const items = this.state[this.props.selection];
    return (
      <div>
        <span style={{ textDecoration: "underline" }}>
          {this.props.selection}
        </span>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {items &&
            items.map((x) => (
              <div
                key={x.id}
                style={{
                  margin: "3px",
                  border: "2px solid rgb(20,20,40)"
                }}
              >
                {x.photo && (
                  <img
                    style={{
                      width: "100px"
                    }}
                    src={x.photo}
                    alt={x.photo}
                  />
                )}
                {x.name}
                <br />${x.price}
                <br />
                {x.link && (
                  <span
                    onClick={() => (window.location.href = "https://" + x.link)}
                    role="img"
                    aria-label="link"
                  >
                    &#128279;
                  </span>
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const firestore = getFirestore(firebase);
class View extends React.Component {
  state = {};
  componentDidMount = () => {
    const pathname = this.props.pathname.split("/")[1];
    onSnapshot(
      doc(firestore, "properties", pathname),
      (dc) =>
        dc.exists() &&
        this.setState({
          property: { ...dc.data(), id: dc.id }
        })
    );
  };
  render() {
    const selections = ["trim", "siding", "exteriorDoors"];
    return (
      <div>
        {this.state.property ? this.state.property.name : "nothing here"}
        {this.state.property &&
          [
            "trim",
            "siding",
            ...(this.state.property.selections
              ? this.state.property.selections
              : [])
          ].map((selection) => (
            <Trim
              key={selection}
              selection={selection}
              property={this.state.property}
            />
          ))}
      </div>
    );
  }
}
export default View;
