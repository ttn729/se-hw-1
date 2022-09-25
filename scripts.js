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
    //TODO: get tweet info and display it
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
    //TODO: get a searched tweet(s) & display it
  });

  //CREATE
  $("#create-form").on("submit", function (event) {
    event.preventDefault();

    var createInput = $("#create-input");
    //TODO: creat a tweet
  });

  //Create searched tweets
  $("#search-form").on("submit", function (event) {
    event.preventDefault();
    var userID = $("#search-input");

    //TODO: search a tweet and display it.
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
  });

  //DELETE
  $("#delete-form").on("submit", function () {
    event.preventDefault();
    var id = $("#delete-input").val();

    //TODO: delete a tweet
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