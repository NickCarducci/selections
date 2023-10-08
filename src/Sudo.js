import React from "react";
import ExecutionEnvironment from "exenv";
import firebase from "./init-firebase.js";
import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
  getDoc,
  setDoc,
  query,
  where,
  getDocs
} from "firebase/firestore";
import {
  signInWithPhoneNumber,
  getAuth,
  RecaptchaVerifier
} from "firebase/auth";
import PhoneInput, { parsePhoneNumber } from "react-phone-number-input";
import PouchDB from "pouchdb";
import upsert from "pouchdb-upsert";
import "react-phone-number-input/style.css";

const firestore = getFirestore(firebase);
export const handleScollImgError = (e) => {
  if (e.message) {
    console.log(e.message);
    this.setState({ serviceCancelingImages: true, noyoutube: true });
  }
};
//cannot stop deranged from subsidy by industry specific visa exclusionary fixed free semiconductor existing business solar assuage "asiduously naive selfish calling for death of republicans more than democrats, irredeemable recention"
export const standardCatch = (err, title) =>
  console.log(title || "err-msg:", err.message);
export const arrayMessage = (message) =>
  message
    .toLowerCase()
    //capture or, excluding set, match 2 or more of the preceding token
    .replace(/((\r\n|\r|\n)+[^a-zA-Z#]+_+[ ]{2,})+/g, " ")
    .split(" ");
export const specialFormatting = (x, numbersOk) =>
  x
    .toLowerCase()
    //replace or regex a-z or A-Z includes space whitespace
    .replace(!numbersOk ? /[^a-zA-Z,']+/g : /[^a-zA-Z0-9,']+/g, " ")
    .split(" '")
    .map((word) => {
      var end = word.substring(1);
      var resword = word.charAt(0).toUpperCase() + end;
      return resword;
    })
    .join(" '")
    .split(" ")
    .map((word) => {
      var end = word.substring(1);
      /*if (word.includes("'")) {
            var withapos = word.lastIndexOf("'");
            var beginning = word.substring(1, withapos);
            //if (beginning.length === 1) {
            end =
              beginning +
              "'" +
              word.charAt(withapos + 1).toUpperCase() +
              word.substring(withapos + 2);
            // }
          }*/
      var resword = word.charAt(0).toUpperCase() + end;
      resword.replaceAll("Of", "of");
      resword.replaceAll("And", "and");
      resword.replaceAll("The", "the");
      //console.log(resword);["Of", "And", "The"].includes(resword); resword.toLowerCase()
      return resword; //arrayMessage(resword).join(" ");
    })
    .join(" ");

//virtual key Bloomberg advertising
//options trading would cease with virtual key.. need volume on bid ask to trade non-preferencially
//$100k/subsidiary
const optsForPouchDB = {
  revs_limit: 1, //revision-history
  auto_compaction: true //zipped...
};
export class CDB {
  //Country caching for phone-input module-dependency
  constructor(name) {
    PouchDB.plugin(upsert);
    const title = "meCountry";
    this.db = new PouchDB(title, optsForPouchDB);
  }
  //deletion = (d) => this.db.remove(d).catch(standardCatch);
  deleteKeys = () => this.db.destroy();
  setCountry = async (c) => {
    //const cc = JSON.parse(JSON.stringify(c)); //https://github.com/pouchdb/pouchdb/issues/6411
    if (!c._id)
      return (
        window.alert("pouchdb needs ._id key:value: JSON.parse= " + c) &&
        (await this.db
          .destroy()
          .then(() => true)
          .catch(standardCatch))
      );
    return await new Promise((resolve) => {
      this.db //has upsert plugin from class constructor
        .upsert(c._id, (copy) => {
          copy = { ...c }; //pouch-db \(construct, protocol)\
          return copy;
        }); //upsert polyfill has no promise returned (...then)
      //console.log(c);
      const done = JSON.stringify(c);
      resolve(done);
      //return a copy, don't displace immutable object fields
    }).catch(standardCatch);
  };
  readCountry = async (notes = {}) =>
    //let notes = {};
    await this.db
      .allDocs({ include_docs: true })
      .then(
        async (
          allNotes //new Promise cannot handle JSON objects, Promise.all() doesn't
        ) =>
          await Promise.all(
            allNotes.rows.map(
              async (n) =>
                await new Promise((r) => {
                  const which = n.doc.key,
                    done = JSON.stringify((notes[which] = n.doc));
                  r(done);
                })
            )
          )
        // && and .then() are functionally the same;
      )
      .catch(standardCatch);
}
//how can real velocity be utiity if such is consumption of hours and goods
//is utility the expense of physical or the leisure of not
//is there leisure to not spending
//"van morrison moonlight like pigs in a blanket smorgesboard" Sid Rosenberg
//Yeah I think these questions[’ answers] are mutually exclusive in every honest instance. I’m asking the questions.'

//mises maintain ordinary share information. conserse/profit - r. paul

//take a non-[de]flationary job and make (a plaintiff out of me). I mean non-deflationary, Im mad and
//marginal labor should deflate by mean proportions geomean
//Isn't marginal leisure (x) by hour (y)?
//not industry friends and family but wholesale
//Should we expire commodities or games?
//Is competitive or technical utility total while the other is marginal?

const loginInitial = {
  ctry: { _id: "country", country: "US" },
  bumpedFrom: "this page",
  uid: "",
  phone: "",
  attemptedPhone: "",
  username: "",
  //name: "",
  id: "",
  under13: false,
  authError: "",
  textedCode: "",
  alertExistingUser: false,
  newAccount: null,
  recaptchaResponse: ""
};

class FIREBASE_SUDO extends React.Component {
  constructor(props) {
    super(props);
    let cdb = new CDB();
    this.state = { ...loginInitial, cdb };
    this.FIREBASE_PHONE_recaptcha = React.createRef();
    window.recaptchaId = "";
  }
  handleChange = (e) => {
    var name = e.target.id;
    var value = e.target.value.toLowerCase();
    if (name === "phone") {
      this.setState({
        [name]: "+1" + value
      });
    } else if (name === "username") {
      this.setState({
        [name]:
          !value.includes(" ") &&
          !value.includes("_") &&
          value.match(/[a-z0-9]/g)
            ? value
            : ""
      });
      if (e.which !== 32) {
        this.setState({ findingSimilarNames: true });
        clearTimeout(this.typingUsername);
        this.typingUsername = setTimeout(() => {
          this.setState({ findingSimilarNames: false }, () => {
            const individualTypes = [],
              newIndTypes = individualTypes.map((x) => x.replace(/[ ,-]/g, "")),
              pagesNamesTaken = [],
              pagesNamesTaken1 = [...newIndTypes, ...pagesNamesTaken],
              curses = ["bitch", "cunt", "pussy", "pussies", "fuck", "shit"],
              hasCurse = curses.find((x) => value.toLowerCase().includes(x)),
              reserveWords = this.props.forbiddenUsernames;
            if (
              hasCurse ||
              reserveWords.includes(value.toLowerCase()) ||
              pagesNamesTaken1.includes(value.toLowerCase())
            )
              return this.setState({ newUserPlease: true }, () =>
                window.alert(
                  "reserve word '" + value + "', please choose another"
                )
              );
            this.setState({ newUserPlease: false }, () =>
              getDocs(
                query(
                  collection(firestore, "users"),
                  where("username", "==", this.state.username)
                )
              ).then((snapshot) =>
                snapshot.docs.forEach((doc) =>
                  this.setState({ newUserPlease: doc.exists() })
                )
              )
            );
          });
        }, 1000);
      }
    } /* else if (e.target.id === "parentEmail") {
      this.setState({
        parentEmail: e.target.value.toLowerCase()
      });
  }*/ /*else {
      this.setState({
        [e.target.id]: specialFormatting(e.target.value)
      });
    }*/
  };
  componentWillUnmount = () => {
    clearTimeout(this.typingUsername);
    this.isMountCanceled = true;
  };
  setCountry = async (ctry, method) => {
    this.setState({
      country: ctry.country
    });
    return await this.state.cdb[method](ctry).catch(standardCatch);
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.location !== prevProps.location) {
      let bumpedFrom =
        this.props.location.state && this.props.location.state.bumpedFrom
          ? this.props.location.state.bumpedFrom
          : this.state.bumpedFrom;
      this.setState({ bumpedFrom });
    }
  };
  // prettier-ignore
  /*const stringAuthObj = (meAuth) => {
      var {
        uid, displayName,photoURL, email, emailVerified,phoneNumber, isAnonymous,  tenantId,
        providerData, apiKey, appName, authDomain, stsTokenManager,  refreshToken,  accessToken,
        expirationTime, redirectEventId, lastLoginAt,  createdAt, multiFactor
      } = meAuth;
      return { _id: uid,  uid, displayName,photoURL, email, emailVerified,  phoneNumber,
        isAnonymous,  tenantId, providerData, apiKey, appName, authDomain, stsTokenManager,
        refreshToken, accessToken, expirationTime,  redirectEventId,  lastLoginAt, createdAt,
        multiFactor: JSON.stringify(multiFactor)
      };
    };*/
  //under 13 not for such a social hazard; -ism
  confirmCode = async (textcode, phone) => {
    window.alert("checking numbers");
    window.confirmationResult
      //"test [bookings, the capacity to will for charging contractual compulsory quality subscription]" (trashboi.club)
      //Not from a monthly escrow but upon ompletion of the deed, or really *just before* overtime indemnity yall
      //work don't make rent bro
      .confirm(textcode)
      .then(async (r) => {
        window.recaptchaId = "";
        //window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
        //this.likeUserforThis(r, phone);

        //reefer latches!
        //likeUserforThis = (r, pn) => {
        //var { user } = result; //AuthImpl:UserImpl//DON'T DECONSTRUCT NOR UNSCOPED VAR?
        //auth = new a;//https://github.com/firebase/firebase-js-sdk/issues/5753#issuecomment-978339103
        //await updateProfile(result.user, {displayName: name});
        //https://firebase.google.com/docs/auth/web/manage-users#update_a_users_profile
        console.log("auth?impl:setAuth ", r.user); //.auth
        const _auth = JSON.stringify(r.user.proactiveRefresh.user); //https://github.com/codesandbox/codesandbox-client/issues/1933#issuecomment-589710212
        //_auth && console.log(_auth);
        /* eslint-disable-next-line*/
        this.props.setAuth(JSON.parse(_auth));
        //^^do this in SUDO (hibit.cc) or currentUser
        // setTimeout(() => this.props.pa.current.click(), 200)
        //this.props.getUserInfo(); //"one other quick thing" (future demand berose)
        getDoc(doc(firestore, "users", r.user.uid))
          .then(async (res) => {
            var exists = res.exists();
            var user = exists && { ...res.data(), id: res.id };
            window.alert(
              exists
                ? "user profile exists... welcome back!"
                : `Welcome to ${this.props.welcomeName}! Adding to firestore...`
            );
            var c = this.state.username.toLowerCase(),
              usernameAsArray = [];
            exists
              ? console.log("users[" + user.username + "]", r.user.uid)
              : console.log("users[" + c + "]", r.user.uid);
            if (exists) return null//this.props.getUserInfo();
            for (let i = 1; i < c.length + 1; i++) {
              usernameAsArray.push(c.substring(0, i));
            }
            await setDoc(doc(firestore, "users", r.user.uid), {
              under13: this.state.under13,
              usernameAsArray,
              //nameAsArray,
              createdAt: new Date(),
              username: this.state.username
              //name: this.state.name
            })
              .then(async () =>
                await setDoc(doc(firestore, this.props.phoneNumberCollection, phone), {
                  uid: r.user.uid
                }).then(async () => {
                  //this.props.getUserInfo();
                  const country = phone ? phone.country : "US";
                  await this.setCountry(
                    {
                      _id: "country",
                      country
                    },
                    "setCountry"
                  )
                    .then(async (r) => await JSON.parse(r))
                    .then((ctry) => {
                      console.log(
                        ctry,
                        country + " set. Normal Finish " + r.user.uid
                      );
                    })
                    .catch((e) => console.log(e));
                  //this.promptCode
                }).catch(standardCatch)
              )
              .catch(standardCatch);
            //this.props.history.push("/");
            //this.props.unloadGreenBlue();
          })
          .catch((err) => {
            this.setState({
              authError: err.message,
              sentCode: false
            });
            console.log(err.message);
            if (window.confirm("send another code?"))
              return this.promptCode(phone, true);
          });
      })
  };
  promptCode = (phone, ask) =>
    this.setState({ attemptedPhone: phone, sentCode: true }, () => {
      console.log(this.state.textedCode, "ok");
      signInWithPhoneNumber(getAuth(), phone, window.recaptchaVerifier)
        .then((confirmationResult) => {
          window.confirmationResult = confirmationResult;
          if (ask) {
            var textcode = window.prompt(
              "what is the sms code sent to " + phone
            );
            if (textcode) this.confirmCode(textcode, phone);
            console.log("sms sent code to " + phone);
          }
        })
        .catch((err) =>
          this.setState(
            {
              sentCode: false,
              newAccount: null,
              authError: err.message
            },
            () => {
              window.recaptchaId = "";
              console.log(err.message);
            }
          )
        );
    });
  componentDidMount = () => {
    this.state.cdb
      .readCountry()
      //.then(async (r) => await r)
      .then(
        (r) =>
          r.length === 0 &&
          console.log(
            "no country stored [Right-Click>inspect>Application>IndexedDB]...",
            r
          )
      )
      .catch((err) => console.log(err));
    //this.responseCallback();
    ExecutionEnvironment.canUseDOM && this.mountRecaptcha();
  };
  responseCallback = () => {
    this.promptCode(this.state.phone, true);
    window.recaptchaId = "";
  };

  //return window.alert("no element FIREBASE_PHONE_recaptcha Sudo.js");
  /*if (window.recaptchaVerifier) {
      window.recaptchaVerifier.clear();
      window.recaptchaVerifier = null;
    }*/
  //https://firebase.google.com/docs/auth/web/phone-auth?hl=en&authuser=0#send-a-verification-code-to-the-users-phone
  //https://firebase.google.com/docs/auth/web/phone-auth?hl=en&authuser=0#send-a-verification-code-to-the-users-phone
  mountRecaptcha = () => {
    const loggedIn = this.props.auth !== undefined;
    window.recaptchaVerifier = new RecaptchaVerifier(
      this.FIREBASE_PHONE_recaptcha.current,
      {
        size: "normal", //callback:()=>true,getResponse : await render()
        callback: (res) => {
          const title = loggedIn ? "multi-" : "main ";
          console.log(`${title}authentication recaptcha response: `, res);
          const recaptchaResponse = window.grecaptcha.getResponse(
            window.recaptchaId
          );
          console.log("verified RecaptchaVerifier: ", recaptchaResponse);
          loggedIn ? this.props.multiCallback() : this.responseCallback();
          return res;
        },
        "expired-callback": (err) => {
          //window.recaptchaVerifier.clear();
          window.recaptchaId = "";
          loggedIn &&
            this.setState({
              sentCode: false
            });
          console.log(err.message);
          return err;
        }
      },
      getAuth()
    );
    let script = require("scriptjs");

    !this.isMountCanceled &&
      script("https://www.google.com/recaptcha/api.js", "explicit", () =>
        this.setState({ loadedRecaptcha: true }, async () => {
          if (!this.isMountCanceled)
            await window.recaptchaVerifier
              .render()
              .then((id) => {
                this.setState({ recaptchaId: id });
              }) //onload=onloadCallback&render=explicit
              .catch(standardCatch);
        })
      );
  };
  showRecaptcha = async () => {
    window.recaptchaId = this.state.recaptchaId;
    this.setState({ boo: true });
  };
  login = () => {
    const warnCaptcha = window.confirm(
      //Cross origin the ability, not security policy. (I lead the latter)
      "Was W3C's Javascript or Apple's WebKit the invention of cross-origin internet cookies?"
    );
    if (this.state.newAccount) return this.showRecaptcha();
    this.setState(
      {
        warnCaptcha
      },
      () => {
        if (!warnCaptcha || this.state.authError !== "") return null;
        if (this.state.newUserPlease)
          return window.alert(
            `${this.state.username} is taken. ` +
              `email ${this.props.supportemail} to claim copyright`
          );
        onSnapshot(
          doc(firestore, this.props.phoneNumberCollection, this.state.phone),
          (dc) => {
            var existingAccount = dc.exists();
            console.log(dc.id, dc.data());
            if (!existingAccount) {
              console.log("no user exists, please sign in");
              this.setState({
                newAccount: !existingAccount
              });
            } else {
              this.showRecaptcha(); //this.renderRecaptcha();
              console.log("user exists, here's the FIREBASE_PHONE_recaptcha");
            }
          }
        );
      }
    ); // && this.setState({ warnCaptcha: true })
  };
  render() {
    const {
        bumpedFrom,
        authError,
        attemptedPhone,
        //warnCaptcha, //Does WebView use reCAPTCHA on desktop or mobile automatically?
        newUserPlease,
        ctry
      } = this.state,
      space = " ";
    //console.log(this.state.showRecaptcha);
    //console.log(window.recaptchaVerifier);
    //console.log("onroot", this.props.onroot);
    return (
      <div
        style={{
          textAlign: "center"
          //transform: `translate(0%,0%)`
        }}
      >
        {this.props.position ? null : window.location.href ===
          this.props.rooturi ? (
          <a
            href={this.props.homeuri}
            style={{
              fontWeight: "bolder",
              WebkitTextStroke: "1px white",
              cursor: "pointer",
              color: "rgb(230, 230, 170)",
              textDecoration: "none"
            }}
          >
            HOME
          </a>
        ) : (
          <div
            style={{
              color: "rgb(175, 140, 90)",
              fontWeight: "bolder",
              WebkitTextStroke: ".5px white",
              cursor: "pointer"
            }}
            onClick={() =>
              this.props.emulateRoot({ onroot: !this.props.onroot })
            }
          >
            HOME
          </div>
        )}
        {this.props.home && this.props.home}
        <div
          style={{
            marginTop: !this.props.position && "20px",
            textAlign: "right",
            width: "80%"
          }}
        >
          <hr
            style={{
              position: "absolute",
              right: "20%",
              width: this.props.onroot ? "100%" : "10%",
              height: "1px",
              backgroundColor: "white"
            }}
          />
        </div>
        <div
          style={{
            position: this.props.position
              ? this.props.position
              : this.props.onroot
              ? "absolute"
              : "fixed",
            paddingTop: !this.props.position && "20px",
            overflow: !this.props.onroot ? "hidden" : "",
            fontSize: !this.props.onroot ? "0px" : "",
            //zIndex: 9,
            //this.props.backgroundColor
            backgroundColor:
              // ? this.props.backgroundColor
              this.props.onroot ? "rgba(20,20,20,.7)" : "",
            width: "100%",
            transform: `translate(${
              this.props.onroot ? 0 : -this.props.width
            }px, 0px)`,
            /*transform:
              this.props.position && this.props.position !== "absolute"
                ? `translate(${
                    this.props.onroot //|| this.props.pathname === "/service"
                      ? 0
                      : -100
                  }%,-50%)`
                : `translate(${
                    this.props.onroot //|| this.props.pathname === "/service"
                      ? "0%"
                      : "-100%"
                  },0%)`,*/
            transition: ".2s ease-out",
            //always have contracts make
            //if cannot have imagine order will bound
            //  opacity: this.props.onroot ? "1" : "0",
            display: !this.props.onroot
              ? "none"
              : this.props.position
              ? "block"
              : "flex",
            /*display:
              this.props.position && this.props.position !== "fixed" //&&
                ? //!this.props.onroot
                  "none"
                : "flex",*/
            flexDirection: "column",
            maxheight: "min-content",
            left: "0%",
            //width: this.props.lastWidth,
            //minHeight: "min-content",
            height:
              //  !this.props.onroot && !this.props.position ? "0px" : //(!this.props.position || this.props.position === "fixed") &&
              `calc(${this.props.availableHeight} - 20px)`,
            fontFamily: "sans-serif",
            textAlign: "center",
            alignItems: "center" //short term employment superfluos power competition
          }}
        >
          {this.props.auth === undefined && this.props.useTopComment}
          {this.props.subTop && this.props.subTop}
          {this.props.auth === undefined
            ? this.props.useTitle && this.props.useTitle
            : this.props.memberMessage}
          {this.props.auth !== undefined && (
            <div
              style={{
                position: "relative",
                margin: "auto",
                marginBottom: "4px",
                width: "max-content",
                borderTopRightRadius: "10px",
                borderTopLeftRadius: "10px",
                padding: "16px 4px",
                backgroundColor: !this.props.backgroundColor
                  ? "rgba(255,255,255,.6)"
                  : "" //this.props.auth!==undefined.sausageadmin
              }}
            >
              (
              <span
                style={{
                  cursor: "pointer",
                  border: "1px solid",
                  borderRadius: "4px",
                  padding: "10px 4px"
                }}
                onClick={() => this.props.logoutofapp()}
              >
                logout
              </span>
            </div>
          )}
          {
            //this.state.showRecaptcha && (
            <div
              style={{
                opacity:
                  window.recaptchaId !== "" //.constructor === Number
                    ? 1
                    : 0,
                position:
                  window.recaptchaId !== "" //.constructor === Number
                    ? "relative"
                    : "fixed",
                zIndex:
                  window.recaptchaId !== "" //.constructor === Number
                    ? 1
                    : -9999
              }}
              ref={this.FIREBASE_PHONE_recaptcha}
              //(this.state.username !== "" || !this.state.newAccount)
            />
          }
          {this.props.root && this.props.auth !== undefined ? (
            this.props.root(this.props.rootArguments)
          ) : (
            <div>
              <div
                style={{
                  padding: "10px",
                  //width: "calc(100% - 20px)",
                  color: "rgb(220,230,240)",
                  backgroundColor: "rgba(0,0,0,.3)"
                }}
              >
                <h1
                  style={{
                    display: "none"
                  }}
                >
                  <span onClick={() => this.props.getUserInfo()}>You</span>
                  {space}must log in to view {bumpedFrom}
                </h1>
                <h2>standard rates apply</h2>
              </div>
              <div
                style={{
                  backgroundColor: "rgba(0,0,0,.2)",
                  color: "rgb(220,230,240)"
                }}
              >
                {authError && authError.toString()}
                {this.state.newAccount === null
                  ? null
                  : this.state.newAccount
                  ? "no user exists, use FIREBASE_PHONE_recaptcha to get firebase.auth() text"
                  : "user exists, use FIREBASE_PHONE_recaptcha to get firebase.auth() text"}
              </div>
              {/*this.state.newAccount && !authError && (
                <div>
                  No&nbsp;{" "}
                  <input
                    onChange={() => this.setState({ under13: true })}
                    name="checkbox"
                    value="below"
                    checked={this.state.under13 === true}
                  />
                  &nbsp;are you 13 or older?
                  <br />
                  ■-■¬(≖_≖ )&nbsp;{" "}
                  <input
                    onChange={() => this.setState({ under13: false })}
                    name="checkbox"
                    value="above"
                    checked={this.state.under13 === false}
                  />
                  &nbsp;Yes
                </div>
                )*/}
              <div
                style={{
                  color: "white",
                  cursor: "pointer",
                  padding: "10px",
                  //width: "calc(100% - 20px)",
                  backgroundColor: "rgba(0,0,0,.8)"
                }}
              >
                {ctry && (
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    {ctry.country !== "US" && (
                      <div
                        style={{ padding: "10px", color: "white" }}
                        onClick={() => {
                          var ctry = { country: "US", _id: "country" };
                          this.setCountry(ctry, "setCountry");
                        }}
                      >
                        &times;
                      </div>
                    )}
                    <div style={{ display: "flex" }}>
                      <PhoneInput
                        //PhoneInputCountryFlag-height={50}
                        defaultCountry={ctry.country}
                        required
                        options={{ extract: true }}
                        placeholder="Enter phone number"
                        value={this.state.phone}
                        onChange={(phone) => {
                          if (phone) {
                            this.setState({
                              phone
                            });
                          } /*else {
                              window.alert("only numbers");
                            }*/
                        }}
                        onSubmit={(e) => {
                          e.preventDefault();
                          //we will have to stop the FDA and KYC virtual ID platform
                          //nothing is free. porn cookies

                          ///business of government false advertising general defense
                          /*if (phone !== "+17322331085")
                                return window.alert("pub use in dev");*/
                          this.login();
                        }}
                      />
                      {this.state.sentCode && (
                        <div
                          style={{
                            width: "max-content",
                            padding: "4px",
                            marginLeft: "4px",
                            fontSize: "14px"
                          }}
                          onClick={() =>
                            this.promptCode(this.state.phone, true)
                          }
                        >
                          GOT IT
                        </div>
                      )}
                    </div>
                  </div>
                )}
                <div
                  onClick={() =>
                    this.setState(loginInitial, () => (window.recaptchaId = ""))
                  }
                >
                  &#8634;
                </div>
                {this.state.newAccount && !authError && (
                  <div>
                    {/*this.state.under13 === true ? (
                  <input
                    required
                    className="input-field"
                    type="email"
                    id="parentEmail"
                    placeholder="parentEmail"
                    value={this.state.parentEmail}
                    onChange={this.handleChange}
                    minLength="3"
                    maxLength="60"
                  />
                 ) : null*/}
                    {newUserPlease ? (
                      <div>
                        {newUserPlease !== true ? newUserPlease : "Username"}{" "}
                        taken
                      </div>
                    ) : (
                      this.state.username !== "" && (
                        <div style={{ fontSize: "14px", color: "grey" }}>
                          SUBJECT TO COPYRIGHT
                        </div>
                      )
                    )}
                    <form
                      onSubmit={(e) => {
                        e.preventDefault();
                        this.showRecaptcha();
                      }}
                    >
                      <input
                        required
                        id="username"
                        type="text" //servers "email" "name" "fname" etc.
                        placeholder="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                        minLength="3"
                        maxLength="30"
                      />
                    </form>
                    {/*<input required className="input-field" id="name" placeholder="name"
                  value={this.state.type} onChange={this.handleChange} minLength="3" maxLength="30"/>*/}
                  </div>
                )}
                {this.state.loading ? (
                  <img
                    src="https://www.dropbox.com/s/le41i6li4svaz0q/802%20%282%29.gif?raw=1"
                    alt="error"
                  />
                ) : window.recaptchaId === "" &&
                  !authError &&
                  this.state.phone !== attemptedPhone ? (
                  <div onClick={() => this.login()}>
                    {this.state.newAccount ? "Sign Up" : "Log in"}
                  </div>
                ) : null}
              </div>
            </div>
          )}
          {this.props.subRoot && this.props.subRoot}
          {this.props.useCan && (
            <div style={{ textAlign: "left", width: "80%" }}>
              <span
                onClick={this.props.useCan}
                style={{
                  maxWidth: "calc(100% - 160px)",
                  color: "rgb(230, 230, 170)",
                  textDecoration: "none",
                  cursor: "pointer"
                }}
              >
                🗑{space}
                {this.props.useCanComment}
              </span>
              <hr
                style={{
                  left: "10%",
                  width: "100%",
                  height: "1px",
                  backgroundColor: "white"
                }}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
//Doesn't a community lift itself by leisure?

export default React.forwardRef((props, ref) => (
  <FIREBASE_SUDO {...props} {...ref.current} />
));
/*export default React.forwardRef((props, ref) => {
  //const destruct = (obj, ...keys) =>
  //keys.reduce((a, c) => ({ ...a, [c]: obj[c] }), {});
  /*console.log(
    <RefFacility
      gui={ref.current["gui"]}
      pa={ref.current["pa"]}
      ra={ref.current["ra"]}
    /> //._owner.ref
  );*/
//new
/*const Base = React.createElement(Sudo, {
    gui: ref.current["gui"],
    pa: ref.current["pa"],
    ra: ref.current["ra"]
  });* / //.state
  return (
    <Sudo
      ref={{
        current: {
          gui: (
            <RefFacility
              //app={Sudo}
              ref={{ current: { gui: ref.current["gui"] } }}
            />
          ),
          pa: (
            <RefFacility
              //app={Sudo}
              ref={{ current: { gui: ref.current["pa"] } }}
            />
          ),
          ra: (
            <RefFacility
              //app={Sudo}
              ref={{ current: { gui: ref.current["ra"] } }}
            />
          )
        }
      }}
      {...props}
    />
);*/ //{...new Sudo().state} {...props} />;
//return RefFacility.render.apply(ref.current, [Sudo]);
/**
   *
   * Element type[name] is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.
        Check the render method of `RefFacility`.
   */
//<Sudo
/*ref={{
        current: destruct(ref.current, "gui", "pa", "ra")
      }}*/
/*gui={ref.current["gui"]}
      pa={ref.current["pa"]}
      ra={ref.current["ra"]}*/
//{...(<RefFacility />)}
//ref={{ ...(<RefFacility />) }}
//ref={RefFacility.apply(ref.current, [])}
/*ref={{
        //Unexpected ref object provided for Sudo. Use either a ref-setter function or React.createRef().
        current: (
          <RefFacility
            gui={ref.current["gui"]}
            pa={ref.current["pa"]}
            ra={ref.current["ra"]}
          />
        )
      }}*/
//{...props}/>
//});
