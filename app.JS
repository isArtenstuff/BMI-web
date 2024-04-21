document.getElementById("parent_box").addEventListener('submit', function (e) {
    e.preventDefault()
    var height = parseFloat(document.getElementById("height-value").value)
    var weight = parseFloat(document.getElementById("weight-value").value)
    var calculated = weight / ((height / 100) ** 2)
    var BMI = calculated.toFixed(2)
    var Finished_bmi = "<h2>Your BMI :" + BMI + "</h2>"
    var result = document.getElementById("Display_allvalue")
    var Riskcriterion = ""
    var Recommendations = ""

    if (BMI < 18.50) {
        Riskcriterion = "Underweight"
        Recommendations = "Weighing less than normal is not good. If you are very tall but underweight may be risky\
        to not getting enough nutrients or not getting enough energy Resulting in the body being easily fatigued. Eating\
        Have enough food and exercise. Exercise like weight training to strengthen muscles can help increase your BMI to within the range normal."
    }
    else if (BMI < 22.90) {
        Riskcriterion = "Standard"
        Recommendations = "Ideal weight for For Thai people, the BMI value is between 18.5-22.9.\
        Classified as normal Stay away from diseases caused by obesity. and has the least risk of developing various diseases, should try\
        Maintain your BMI at this level for as long as possible."
    }
    else if (BMI < 24.90) {
        Riskcriterion = "First stage of overweight"
        Recommendations = "Try a little more to reduce your weight to the standard value because your BMI during this period is still considered normal.\
        that they are a group of people who are somewhat obese Although not considered fat But if there is a family history of diabetes and high blood pressure\
        High blood pressure is still considered to be at higher risk than normal people."
    }
    else if (BMI < 29.90) {
        Riskcriterion = "Second stage of overweight"
        Recommendations = "Even if you don't reach the criteria that is considered extremely obese, you are still at risk.\
        Diseases that come with obesity can occur as well. both diabetes and high blood pressure"
    }
    else {
        Riskcriterion = "Third stage of overweight"
        Recommendations = "Your weight is dangerously excessive.because he meets the criteria for being very obese Risk of developing serious diseases that are hidden with\
        Obesity if the BMI is at this level Must be careful about eating fat and should exercise regularly and\
        If the number is higher than 40.0, it indicates more obesity."
    }


    var Riskcriterion_text = "<p>" + "Riskcriterion :" + Riskcriterion + "</p>"
    var Recommendation_text = "<p>" + "Recommendations :" + Recommendations + "</p>" + "<br><br>" + "<strong>" + "Tank you." + "</strong>"
    result.innerHTML = Finished_bmi + Riskcriterion_text + Recommendation_text
})
