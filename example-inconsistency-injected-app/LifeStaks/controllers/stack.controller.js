function stacksController($routeParams) {
    // ---------------- Environment Values and Settings --------------------------

    var vm = this;
    var c = document.createElement("canvas");
    var ctx = c.getContext("2d");
    var CanvasWidth = 1200;
    var CanvasHeight = 750;
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var minFontSize = CanvasHeight / 30;
    var maxFontSize = CanvasHeight / 10;
    var fontWeight = 'bold';

    // Get current date
    var today = new Date();
    var currentDate = today.getMonth() + 1 + "/" + today.getDate() + "/" + today.getFullYear();

    // Set canvas dimensions
    c.width = CanvasWidth;
    c.height = CanvasHeight;

    // colors
    var colors = [
        '#5E412F',
        '#F9CC36',
        '#78C0A8',
        '#F07818',
        '#F0A830',
        '#C7E0D0',
    ]

    // Watermark
    var watermark = "SimplyDo.com";


    // --------------------- Helper Functions ----------------------------

    vm.convertCanvasToImagee = function () {
        return c.toDataURL("image/png");
    }

    vm.addSlice = function () {
        var newSlice = {
            label: "",
            percentage: 10
        }
        vm.deck.slices.push(newSlice);
    }

    vm.removeSlice = function (index) {
        vm.deck.slices.splice(index, 1);
    }

    vm.urlEncode = function (sourceObject) {

        // takes an object and converts it into JSON into an ULR encoded string
        // see also urlDecode

        var cleanString = angular.toJson(sourceObject);
        return escape(encodeURIComponent(cleanString));
    }

    vm.urlDecode = function (uri) {

        // takes an url encoded string and converts it to JSON to Object
        // see also urlEncode

        var cleanString = unescape(decodeURIComponent(uri));
        return angular.fromJson(cleanString);
    }

    vm.totalPercentage = function () {

        var totalPercentage = 0;

        for (var i in vm.deck.slices) {
            totalPercentage = totalPercentage + parseInt(vm.deck.slices[i].percentage);
        }

        return totalPercentage;
    }

    vm.totalSlices = function () {

        return vm.deck.slices.length;
    }

    vm.renderStack = function () {
        vm.renderStackToCanvas(vm.deck.slices);
    }

    vm.resetCanvas = function () {

        // set background colour
        ctx.fillStyle = "#EEEEEE";

        // fill entire canvas
        ctx.fillRect(0, 0, CanvasWidth, CanvasHeight);


        /*
         // add water mark
         ctx.fillStyle='rgba(255,255,255,0.4)';
         ctx.font = "bold "+ CanvasWidth/25 +"px sans-serif";
         ctx.fillText(watermark, CanvasWidth/20, CanvasHeight-CanvasHeight/20);
         */

    }

    vm.renderStackToCanvas = function (slices) {

        var barHeight;
        var usedStackHeight = 0;
        var color;
        var previousColor;
        var labelSize;

        vm.resetCanvas();


        for (var i in slices) {

            //break if stack is too hight (e.g. bad data)
            if (usedStackHeight > CanvasHeight) {
                break;
            }

            // calculate height of slice in pixels
            barHeight = CanvasHeight / 100 * parseInt(slices[i].percentage);

            // set slice color and make sure adjucent colors are not the same!
            while (color == previousColor) {
                color = colors[Math.floor(Math.random() * colors.length)];
            }
            previousColor = color;
            ctx.fillStyle = color;

            // render slice to canvas
            ctx.fillRect(0, usedStackHeight, CanvasWidth, barHeight);

            // increment height already used up by slices
            usedStackHeight = usedStackHeight + barHeight;

            // render label
            labelSize = barHeight / 2;
            if (labelSize > maxFontSize) {
                labelSize = maxFontSize;
            } else if (labelSize < minFontSize) {
                labelSize = minFontSize;
            }
            ctx.fillStyle = 'rgba(255,255,255,0.9)';
            ctx.font = fontWeight + " " + labelSize + "px sans-serif";
            ctx.fillText(slices[i].label, minFontSize * 3, usedStackHeight - barHeight / 2 + labelSize / 3);

            //Adding percentage read out
            ctx.fillStyle = 'rgba(255,255,255,0.6)';
            ctx.font = fontWeight + " " + minFontSize + "px sans-serif";
            ctx.fillText(parseInt(slices[i].percentage) + "%", CanvasWidth / 80, usedStackHeight - barHeight / 2 + labelSize / 3);

        }

        /*
         // add water mark once all the slices have been rendered
         ctx.fillStyle='rgba(255,255,255,0.4)';
         ctx.font = "bold "+ CanvasWidth/25 +"px sans-serif";
         ctx.fillText(watermark, CanvasWidth/20, CanvasHeight-CanvasHeight/20);
         */

    }

    // --------------------- Init ----------------------------

    // if no stack is present in the URL create a default one to use
    if ($routeParams.stack) {
        vm.deck = vm.urlDecode($routeParams.stack);
    } else {
        vm.deck = {
            "title": currentDate,
            "slices": [
                {
                    label: "Work",
                    percentage: 60
                },
                {
                    label: "Sleep",
                    percentage: 30
                },
                {
                    label: "Fun",
                    percentage: 10
                }
            ]
        }
    }

    vm.renderStackToCanvas(vm.deck.slices);


}

stacksController.$inject = ['$routeParams'];
angular.module('lifeStacks').controller('stacksController', stacksController)