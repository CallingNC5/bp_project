function setValue() {
    var input = "I want to eat " + document.getElementById("foodType").value + " food from " + document.getElementById("startDate").value
    + " to " + document.getElementById("endDate").value + " with " + document.getElementById("numOfMeals").value
    + " meals per day. Can you generate a meal plan for me that includes cooking instructions and recipes? Also, can it be in the format of: "
    + "\nmm/dd/yyyy 1. (food): Ingredients:food,food,food Cooking Instructions:Step1:stuff,Step2:stuff\n\nDo not include which meal of the day it is.";
    alert(input);
}

function postData(input) {
    $.ajax({
        type: "POST",
        url: "/reverse_pca.py",
        data: { param: input },
        success: callbackFunc
    });
}

function callbackFunc(response) {
    alert(response);
    console.log(response);
}

postData('data to process');