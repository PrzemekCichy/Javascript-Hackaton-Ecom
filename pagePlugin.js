//Main The Revealing Module Pattern
var recom = recom || (function () {

    var serverIP = "http://10.83.3.129:7080/"
    var cssLink = "https://dl.dropboxusercontent.com/s/ytmj2rz8b1kjf6z/plugin.css?dl=0";


    function init() {
         Handlebars.registerHelper('ifCond', function (parent, options) {
            if (parent != 0) {
                return options.fn(this);
            } else if (parent == 0) {
                return options.inverse(this);
            }
        });

         var sourceReviewTemplate = $("#review-list").html();
         reviewTemplate = Handlebars.compile(sourceReviewTemplate);

         var sourceReplyTemplate = $(".reply-form-container").html();
         replyTemplate = Handlebars.compile(sourceReplyTemplate);

        $(".input-wrapper").on("click", "p", function () {
            $(".auth-section .guest .guest-details").css("display", "block");
        });

        $(".proceed").on("click", function () {
            var data = {
                userURL: "",
                reviewId: "review-123123",
                username: "Przemyslaw Cichy",
                parent: 0,
                stars: 5,
                userAvatarURL: "https://digiramp.s3.amazonaws.com/uploads/user/image/1650/avatar_92x92_TIM_PROFILE_7.jpg",
                badge: "Moderator",
                longTime: "Thursday, October 22, 2015 12:19 AM",
                reviewContent: "Hey, this will show when you try to add new review/comment.",
                likesCount: "0",
                dislikesCount: "0",
            }
            postDataToServer(data);
            $(".textarea p").text("");
            addReview(data);
        });

        $(".proceed").on("click", function () {
            var data = {
                userURL: "",
                reviewId: "review-123123",
                username: "Przemyslaw Cichy",
                parent: 0,
                stars: 5,
                userAvatarURL: "https://digiramp.s3.amazonaws.com/uploads/user/image/1650/avatar_92x92_TIM_PROFILE_7.jpg",
                badge: "Moderator",
                longTime: "Thursday, October 22, 2015 12:19 AM",
                reviewContent: "Hey, this will show when you try to add new review/comment.",
                likesCount: "0",
                dislikesCount: "0",
            }
            postDataToServer(data);
            $(".textarea p").text("");
            addReview(data);
        });

        renderPosts();
    }

    function addReview(data) {
        var parent = $("#review-list");
        if (data.parent != 0) {
            $("#" + data.parent).children(".children").append(reviewTemplate(data));
        } else {
            parent.prepend(reviewTemplate(data));
        }
    };

    function addReplyForm(parent) {
        var parent = parent || "recomScope";
        if (parent != "recomScope") {
            $(parent = "children")[0].append(replyTemplate());

            document.getElementById(parent).getElementsByClassName("children")[0].innerHTML += reviewTemplate(
              data
            );
        } else {
            $("#recomScope").prepend(replyTemplate());
        }
    };

    var data = [
          {
              userURL: "",
              reviewId: "review-123",
              username: "John Snow",
              parent: 0,
              stars: 5,
              userAvatarURL: "https://digiramp.s3.amazonaws.com/uploads/user/image/1650/avatar_92x92_TIM_PROFILE_7.jpg",
              badge: "Moderator",
              longTime: "Thursday, October 22, 2015 12:19 AM",
              reviewContent: "Great Bike, I have been using it for 3 years!",
              likesCount: "1002",
              dislikesCount: "44",
          },
          {
              userURL: "",
              reviewId: "review-124",
              parent: "review-123",
              username: "Tehol Beddict",
              userAvatarURL: "http://a.disquscdn.com/uploads/users/11812/9159/avatar92.jpg?1446869722",
              badge: "Moderator",
              longTime: "Thursday, October 22, 2015 12:19 AM",
              reviewContent: "Hellooo this is a very long review brother!",
              likesCount: "111",
              dislikesCount: "4",
          },
          {
              userURL: "",
              reviewId: "review-125",
              parent: "review-124",
              username: "George",
              userAvatarURL: "http://www.socialbrite.org/wp-content/uploads/2011/04/george-weiner120-92x92.jpg",
              badge: "User",
              longTime: "Thursday, October 22, 2015 12:19 AM",
              reviewContent: "Did you exchange any parts",
              likesCount: "12",
              dislikesCount: "4",
          },
          {
              userURL: "",
              reviewId: "review-125",
              parent: 0,
              username: "Tavore Paran",
              userAvatarURL: "http://www.doreljuvenile.com/content/scaled_images/92x92-content_formfield__files_cropped__formHrManager__530__39b20e.jpg",
              badge: "Moderator",
              longTime: "Thursday, October 22, 2015 12:19 AM",
              reviewContent: "Great bike, Bought for my Husband. He uses it every day and has been very happy.",
              likesCount: "162",
              dislikesCount: "4",
          },
          {
              userURL: "",
              reviewId: "review-126",
              parent: "review-125",
              username: "Przemek Cichy",
              userAvatarURL: "http://a.disquscdn.com/uploads/users/11812/9159/avatar92.jpg?1446869722",
              badge: "Moderator",
              longTime: "Thursday, October 22, 2015 12:19 AM",
              reviewContent: "Did the price drop since the time you ourchased it?",
              likesCount: "102",
              dislikesCount: "4",
          },
          {
              userURL: "",
              reviewId: "review-127",
              parent: "review-126",
              username: "Apsalar",
              userAvatarURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDYNFAHorCDI7ZfsrnhMEIt9Msui--f2hlFBEybmtPkwxqhypa2w",
              badge: "Moderator",
              longTime: "Thursday, October 22, 2015 12:19 AM",
              reviewContent: "I bought it 2 years ago, the price decreased by 10%",
              likesCount: "72",
              dislikesCount: "0",
          },
          {
              userURL: "",
              reviewId: "review-128",
              parent: "review-123",
              username: "Shikamaru Nara",
              userAvatarURL: "https://a.disquscdn.com/uploads/users/13601/3956/avatar92.jpg?1434910929",
              badge: "Moderator",
              longTime: "Thursday, October 22, 2015 12:19 AM",
              reviewContent: "Cool!",
              likesCount: "12",
              dislikesCount: "4",
          },
    ];

    function renderPosts() {
        for (var i = 0; i < data.length; i++) {
            console.log(data[i]);
            addReview(data[i]);
        }
    }

    //Send users review to server
    function postDataToServer(argumentReview) {
        console.log("trying to post ...");
        $.ajax({
            url: serverIP + 'RecomWebsite/api/save_review',
            crossDomain: true,
            type: 'POST',
            dataType: 'json',
            success: function (data) {
                console.log("POST Success...");
            },
            data: { "review": argumentReview }
        });
    };

    //Send users reviews from server for product
    function getDataFromServer() {
        $.ajax({
            type: 'GET',
            url: serverIP + 'RecomWebsite/api/get_dummy_product_reviews',
            crossDomain: true,
            success: function (responseData, textStatus, jqXHR) {
                console.log("Get Success...");
                recom.data(responseData);
            },
            error: function (responseData, textStatus, errorThrown) {
                alert('GET failed.');
            }
        });
    }
    init();

    // Reveal public pointers to
    // private functions and properties
    return {
        post: postDataToServer,
    };
})();


/*
  var JQLink = document.createElement("script");
  JQLink.src = "https://code.jquery.com/jquery-2.1.4.min.js"
  document.getElementsByTagName("head")[0].appendChild(JQLink);
  */