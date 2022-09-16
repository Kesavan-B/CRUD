import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect } from "react";
import Checkbox from "@mui/material/Checkbox";

export const Dats = () => {
  const [name, setName] = React.useState("");
  const [number, setNumber] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [gender, setGender] = React.useState("");
  const [pass, setPass] = React.useState("");
  const [conPass, setConPass] = React.useState("");
  const [store, setStore] = React.useState([]);
  const [helper, setHelper] = React.useState({
    name: "",
    number: "",
    gender: "",
    email: "",
    pass: "",
    conPass: "",
  });
  const [error, setError] = React.useState({
    name: false,
    number: false,
    gender: false,
    email: false,
    pass: false,
    conPass: false,
    permission: false,
  });
  const [permission, setPermission] = React.useState(false);
  const [update, setUpdate] = React.useState(false);
  const [editId, setEditId] = React.useState("");

  const nameHandler = (e) => {
    setName(e);

    if (e.length < 3) {
      helper.name = "max 3 words";
      error.name = false;
    } else {
      helper.name = "";
      error.name = true;
    }
  };
  const numberHandler = (e) => {
    setNumber(e);

    if (e.length < 10 || e.length > 10) {
      helper.number = "Enter Valid Number";
      error.number = false;
    } else {
      helper.number = "";
      error.number = true;
    }
  };
  const genderhandler = (e) => {
    setGender(e);

    if (e === "") {
      helper.gender = "Select one";
      error.gender = false;
    } else {
      helper.gender = "";
      error.gender = true;
    }
  };

  const emailHandler = (e) => {
    setEmail(e);
    var atpos = e.indexOf("@");
    var dotpos = e.lastIndexOf(".");
    if (atpos < 1 || dotpos < atpos + 2 || atpos + 2 >= e.length) {
      helper.email = "Enter Valid Email";
      error.email = false;
    } else {
      helper.email = "";
      error.email = true;
    }
  };

  const passHandler = (e) => {
    setPass(e);
    if (e.length < 3) {
      helper.pass = "must in 3 char";
      error.pass = false;
    } else {
      helper.pass = "";
      error.pass = true;
    }
  };

  const conPassHandler = (e) => {
    setConPass(e);
    if (e !== pass) {
      helper.conPass = "must be same";
      error.conPass = false;
    } else {
      helper.conPass = "";
      error.conPass = true;
    }
  };

  const submit = (e) => {
    e.preventDefault();

    let payload = {
      id: Math.floor(Math.random() * 6) + 1,
      name: name,
      number: number,
      email: email,
      gender: gender,
      pass: pass,
      conPass: conPass,
      permission: permission,
    };
    console.log(payload);
    setStore([...store, payload]);
    setName("");
    setNumber("");
    setEmail("");
    setGender("");
    setPass("");
    setConPass("");
    setPermission(false);
  };
  useEffect(() => {}, [
    error.name,
    error.number,
    error.gender,
    error.email,
    error.pass,
    error.conPass,
  ]);
  const deleteItem = (index) => {
    setStore((store) => store.filter((_, a) => a !== index));
  };
  const editItem = (index) => {
    setName(store[index].name);
    setNumber(store[index].number);
    setEmail(store[index].email);
    setGender(store[index].gender);
    setPass(store[index].pass);
    setConPass(store[index].conPass);
    setUpdate(true);
    setEditId(store[index].id);
  };
  const updateHandler = () => {
    console.log(store);
    // const a = indexOf()
    const index = store.findIndex((object) => {
      return object.id == editId;
    });
    console.log(index);
    store.forEach((a) => {
      if (a.id == editId) {
        let payload = {
          id: editId,
          name: name,
          number: number,
          email: email,
          gender: gender,
          pass: pass,
          conPass: conPass,
          permission: permission,
        };
        console.log(payload);
        store[index] = payload;
        setName("");
        setNumber("");
        setEmail("");
        setGender("");
        setPass("");
        setConPass("");
        setPermission(false);
        setEditId("");
      }
    });
  };
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "400px",
        padding: "10px",
        margin: "auto",
      }}
    >
      <div>
        <div className="fields">
          <h1 style={{ textAlign: "center" }}>Form</h1>
        </div>
        <div className="fields">
          <TextField
            fullWidth
            size="small"
            label="Name"
            value={name}
            helperText={helper.name}
            onChange={(event) => nameHandler(event.target.value)}
            type="text"
          />
        </div>
        <div className="fields">
          <TextField
            fullWidth
            size="small"
            label="Number"
            value={number}
            helperText={helper.number}
            onChange={(event) => numberHandler(event.target.value)}
            type="number"
          />
        </div>
        <div className="fields">
          <FormControl fullWidth size="small">
            <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Gender"
              value={gender}
              onChange={(event) => genderhandler(event.target.value)}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"others"}>Others</MenuItem>
            </Select>
            <FormHelperText>{helper.gender}</FormHelperText>
          </FormControl>
        </div>
        <div className="fields">
          <TextField
            fullWidth
            size="small"
            label="Email"
            value={email}
            helperText={helper.email}
            type="email"
            onChange={(event) => emailHandler(event.target.value)}
          />
        </div>
        <div className="fields">
          <TextField
            fullWidth
            size="small"
            label="Pass"
            value={pass}
            helperText={helper.pass}
            type="password"
            onChange={(event) => passHandler(event.target.value)}
          />
        </div>
        <div className="fields">
          <TextField
            fullWidth
            size="small"
            label="ConPass"
            value={conPass}
            helperText={helper.conPass}
            type="password"
            onChange={(event) => conPassHandler(event.target.value)}
          />
        </div>
        <div className="fields">
          <FormControlLabel
            control={
              <Checkbox
                onChange={() => setPermission(!permission)}
                value={permission}
              />
            }
            label="Agree Terms & Condition"
          />
        </div>
        <div className="fields">
          {!update ? (
            <Button
              variant="contained"
              size="small"
              fullWidth
              onClick={(e) => submit(e)}
              disabled={
                !error.name ||
                !error.number ||
                !error.email ||
                !error.gender ||
                !error.pass ||
                !error.conPass ||
                !permission
              }
            >
              Submit
            </Button>
          ) : (
            <Button
              variant="contained"
              fullWidth
              onClick={() => updateHandler()}
            >
              update
            </Button>
          )}
        </div>
      </div>
      <div>
        {store.map((e, index) => (
          <div key={index}>
            <ul>
              <li>{e.name}</li>
              <li>{e.number}</li>
              <li>{e.email}</li>
              <li>{e.gender}</li>
              <li>{e.pass}</li>
              <li>{e.conPass}</li>
              <li>{e.permission}</li>
              <Button onClick={() => editItem(index)}>edit</Button>
              <Button onClick={() => deleteItem(index)}>delete</Button>
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};
