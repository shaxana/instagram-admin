import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
function createUser(
  id: string,
  username: string,
  surname: string,
  password: string,
  email: string,
  isPublic: string,
  posts: string[],

  followers: string[],
  following: string[],
  stories: string[],
  blockList: string[],
  notifications: string[],
  bio: {
    info: string;
    country: string;
  }
) {
  return {
    id,
    username,
    surname,
    password,
    email,
    isPublic,
    posts,
    followers,
    following,
    stories,
    blockList,
    notifications,
    bio,
  };
}

interface User {
  _id: string;
  id: string;
  username: string;
  surname: string;
  password: string;
  email: string;
  isPublic: boolean;
  posts: [
    {
      imgSRC: string,
      title:string
    }
  ];
  followers: string[];
  following: string[];
  stories: string[];
  blockList: string[];
  notifications: string[];
  bio: {
    info: string;
    country: string;
  };
}


function Users() {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    axios("https://instagram-api-wb7u.onrender.com/users").then((res) => {
      setUsers(res.data);
    });
  }, []);
  return (
    <TableContainer component={Paper} sx={{ marginLeft: "240px" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell> ID</TableCell>
            <TableCell> _ID</TableCell>
            <TableCell> Username</TableCell>
            <TableCell align="right">Surname</TableCell>
            <TableCell align="right">Password</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">isPublic</TableCell>
            <TableCell align="right">Posts</TableCell>
            <TableCell align="right">Followers</TableCell>
            <TableCell align="right">Following</TableCell>
            <TableCell align="right">Stories</TableCell>
            <TableCell align="right">Block List</TableCell>
            <TableCell align="right">Notifications</TableCell>
            <TableCell align="right">Bio</TableCell>
            <TableCell align="right">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: User) => (
            <TableRow
              key={user.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {user.id}
              </TableCell>
              <TableCell component="th" scope="row">
                {user._id}
              </TableCell>
              <TableCell component="th" scope="row">
                {user.username}
              </TableCell>
              <TableCell align="right">{user.surname}</TableCell>
              <TableCell align="right">{user.password}</TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.isPublic}</TableCell>
              <TableCell align="right">
                {user.posts.map((post)=>(
                  <div>
                    <img src={post.imgSRC} alt={post.title}  style={{width:50}}/>
                  <Button style={{background:'red',color:'white', height:50 }}>delete</Button>
                  </div>
                ))}
              </TableCell>
              {/* onClick={()=>{
                axios.patch(`https://instagram-api-wb7u.onrender.com/users/${user.id}`).then((res)=>{
                  posts:{
                    imgURL:"";
                    title:""
                  }
                })
              }} */}
              <TableCell align="right">{user.followers}</TableCell>
              <TableCell align="right">{user.following}</TableCell>
              <TableCell align="right">{user.stories}</TableCell>
              <TableCell align="right">{user.blockList}</TableCell>
              <TableCell align="right">{user.notifications}</TableCell>
              <TableCell align="right">{user.bio?.info}</TableCell>
              <TableCell align="right">
                <Button
                  style={{ background: "red", color: "white" }}
                  onClick={() => {
                    axios
                      .delete(
                        `https://instagram-api-wb7u.onrender.com/users/${user.id}`
                      )
                      .then((res) => {
                        console.log("user delted");

                        alert("user deleted");
                      });
                  }}
                >
                  delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Users;
