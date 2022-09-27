$(function () {
  //Get users
  $("#get-button").on("click", function () {
    $.ajax({
      url: "/tweets",
      contentType: "application/json",
      success: function (response) {
        var tbodyEl = $("#namebody");

        tbodyEl.html("");

        response.forEach((element) => {
          tbodyEl.append(
            '\
            <tr>\
              <td class="id">' +
              element.user.id +
              "</td>\
              <td>" +
              element.user.screen_name +
              "</td>\
              <td>" +
              element.user.name +
              "</td>\
            </tr>\
          "
          );
        });
      },
    });
  });

  //Get tweets
  $("#get-tweets-button").on("click", function () {
    $.ajax({
      url: "/tweetinfo",
      contentType: "application/json",
      success: function (response) {
        var tbodyEl = $("#tweetbody");

        tbodyEl.html("");

        response.forEach((element) => {
          tbodyEl.append(
            '\
            <tr>\
              <td class="id">' +
              element.id +
              "</td>\
              <td>" +
              element.text +
              "</td>\
              <td>" +
              element.created_at +
              "</td>\
            </tr>\
          "
          );
        });
      },
    });
  });

  //Get searched tweets
  $("#get-searched-tweets").on("click", function () {
    $.ajax({
      url: "/searchinfo",
      method: "POST",
      contentType: "application/json",
      success: function (response) {
        var tbodyEl = $("#searchbody");

        tbodyEl.html("");

        response.forEach((element) => {
          tbodyEl.append(
            '\
            <tr>\
              <td class="id">' +
              element.id +
              "</td>\
              <td>" +
              element.text +
              "</td>\
              <td>" +
              element.created_at +
              "</td>\
            </tr>\
          "
          );
        });
      },
    });
  });

  //CREATE
  $("#create-form").on("submit", function (event) {
    event.preventDefault();

    var createInput = $("#create-input");
    //TODO: create a tweet
  });

  //Create searched tweets
  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    var userID = $("#search-input").val();

    //TODO: search a tweet and display it.
    $.ajax({
      url: "/searchinfo/" + userID,
      contentType: "application/json",
      success: function (response) {
        var tbodyEl = $("#searchbody");

        tbodyEl.html("");
        tbodyEl.append(
          '\
            <tr>\
              <td class="id">' +
            response.id +
            "</td>\
              <td>" +
            response.text +
            "</td>\
              <td>" +
            response.created_at +
            "</td>\
            </tr>\
          "
        );
      },
    });
  });

  //UPDATE/PUT
  $("#update-user").on("submit", function (event) {
    event.preventDefault();
    var updateInput = $("#update-input");
    var inputString = updateInput.val();

    const parsedStrings = inputString.split(";");

    var name = parsedStrings[0];
    var newName = parsedStrings[1];

    //TODO: update a tweet
    $.ajax({
      url: "tweets/" + name + ";" + newName,
      method: "PUT",
      contentType: "application/json",
      success: function (response) {
        console.log(response);
        $("#get-button").trigger("click");
      },
    });
  });

  //DELETE
  $("#delete-form").on("submit", function () {
    event.preventDefault();
    var id = $("#delete-input").val();

    $.ajax({
      url: "/tweetinfo/" + id,
      method: "DELETE",
      contentType: "application/json",
      success: function (response) {
        console.log(response);
        $("#get-tweets-button").trigger("click");
      },
    });
  });
});
