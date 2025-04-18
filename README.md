# MileMasterJS - Interactive Mileage Dashboard

![Dashboard 1 Preview](https://github.com/danyallya/MileMasterJS-2018/blob/master/1.PNG) ![Dashboard 2 Preview](https://github.com/danyallya/MileMasterJS-2018/blob/master/2.PNG)

## Overview
MileMasterJS is a JavaScript project featuring two interactive mileage dashboards with different visualization styles. The dashboards display numerical input with circular progress indicators.

## Features
- **Dashboard 1**: Rotating half-circle progress indicator
- **Dashboard 2**: Gradient circle with segmented progress
- Real-time number display
- Interactive input field
- Responsive design

## Installation
```bash
git clone https://github.com/yourusername/MileMasterJS-2018.git
cd MileMasterJS-2018
```

## Usage
Open index.html for the first dashboard

Open index2.html for the second dashboard

Enter a number in the input field to see the visualization update

## Dashboard 1 Code

```html
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/style.css">
    <title>Basic Dashboard</title>
</head>
<body>
<div class="main">
    <div class="dashboard">
        <div class="circle-one">
            <div class="circle-tow">
                <div class="number-text">0</div>
            </div>
            <div class="circle-hide">
                <div class="rotated-half-circle">
                    <div class="rotated-half-circles"></div>
                </div>
            </div>
        </div>
    </div>
    <div class="get">
        <input type="number">
    </div>
</div>
<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
<script>
    $(".get input").on("change paste keyup", function() {
        var number = parseInt($(this).val());
        $(".number-text").html(number);
        number = 224 - number;
        $(".rotated-half-circle").css("transform", "rotate(-" + number + "deg)")
    })
</script>
</body>
</html>
```

## Dashboard 2 Code


```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Advanced Dashboard</title>
    <link rel="stylesheet" type="text/css" href="css/style1.css">
</head>
<body>
<div class='circle-container'>
    <div class="circle-gradiant"></div>
    <div class="num-text">-</div>
    <div class="logo"></div>
</div>
<input class="num" type="number">
<script type="text/javascript" src="js/jquery-1.11.2.min.js"></script>
<script>
    // Circle segment generation and styling code...
    $("input").on("change paste keyup", function() {
        var num = $(this).val();
        $(".num-text").html(num);
        num = 1.5 * num;
        num = num + 1;
        var intvalue = Math.round(num);
        for (i = 0; i < intvalue; i++) {
            $(".deg" + i).addClass("active");
        }
        for (g = intvalue; g < 272; g++) {
            $(".deg" + g).removeClass("active");
        }
    })
 </script>
</body>
</html>
```



# Dependencies
jQuery 1.11.2

# License
MIT License

# Contact Information

Phone: +98 935 162 96 70

Email: danyal.yasheikh@gmail.com




