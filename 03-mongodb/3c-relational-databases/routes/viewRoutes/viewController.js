const Album = require("../START-albums/albumsModel");
const User = require("../START-users/usersModel");
const axios = require("axios");

async function getHomePage(req, res) {
  try {
    res.render("home");
  } catch (error) {
    let errorObj = {
      message: "failure to get Home Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

async function getAlbumPage(req, res) {
  try {
    let listOfAlbums = await Album.find({});

    res.render("albums", { albums: listOfAlbums });
  } catch (error) {
    let errorObj = {
      message: "failure to get Album Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

async function getOneAlbumPage(req, res) {
  try {
    let currentAlbum = await Album.findOne({ _id: req.params.id });

    let favoriteUsersIdsArray = currentAlbum.userFavorite;

    let userDocumentsArray = [];

    favoriteUsersIdsArray.forEach(async (id) => {
      let userDoc = await User.findOne({ _id: id });

      // console.log(userDoc);

      userDocumentsArray.push(userDoc);

      if (userDocumentsArray.length === favoriteUsersIdsArray.length) {
        res.render("oneAlbum", {
          album: currentAlbum,
          userList: userDocumentsArray,
        });
      }
    });

    // res.render("oneAlbum", {album: currentAlbum, userList: userDocumentsArray})
  } catch (error) {
    let errorObj = {
      message: "failure to get User Favorite Page",
      payload: error,
    };

    // server-side error
    console.log(errorObj);

    // client-side error
    res.json(errorObj);
  }
}

module.exports = {
  getHomePage,
  getAlbumPage,
  getOneAlbumPage,
};
