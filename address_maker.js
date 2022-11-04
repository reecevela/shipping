$(document).ready( () => {
    let to;
    let from;
    let loc;
    let currentInfo;
    let price;
    let email;
    let trEmailed;
    let csToComplete;
    let shipSpeed;

    const addressInfo = {
        gpcm: {
            cname: "GPC Muscatine",
            st: "1600 Oregon St",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        gpcw: {
            cname: "GPC Washington",
            st: "1443 S 300 W",
            city: "Washington",
            stZip: "IN 47501"
        },
        sheldonMS: {
            cname: "Kent Nutrition Group",
            st: "1500 RMT Ave",
            city: "Sheldon",
            stZip: "IA 51201"
        },
        columbus: {
            cname: "Kent Corp",
            st: "1409 Highway 45 S",
            city: "Columbus",
            stZip: "MS 39701"
        }
    }

    for (const location in addressInfo) {
        if (Object.hasOwnProperty.call(addressInfo, location)) {
            const element = addressInfo[location];
            $("#locList").append($("<option>").attr('value', location));
        }
    }

    $('#address_form').submit( (evt) => {
        to = $('#to').val();
        from = $('#from').val();
        price = $('#price').val();
        email = $('#email').val();
        loc = $('#location').val();
        currentInfo = addressInfo[loc];

        trEmailed = ($('#trEmailed').is(':checked')) ? "YES" : "NO";
        csToComplete = ($('#csToComplete').is(':checked')) ? "YES" : "NO";
        
        if ($('#overnight').is(':checked')) {
            shipSpeed = "OVERNIGHT";
        } else if ($('#twoDay').is(':checked')) {
            shipSpeed = "TWO DAY";
        } else {
            shipSpeed = "GROUND"
        }

        $('.output').empty();

        $('.output').append("<h1><b>UPS Label</b></h1><br>")
            .append(`<b>Company Name:</b> ${currentInfo.cname}<br>`)
            .append(`<b>Attn To:</b> ${to}<br>`)
            .append(`<b>Address:</b> ${currentInfo.st}<br>`)
            .append(`<b>City:</b> ${currentInfo.city}<br>`)
            .append(`<b>State/Zip</b> ${currentInfo.stZip}<br>`)
            .append('<b>Dept to Charge</b> Kent IT<br>')
            .append(`<b>From:</b> ${from}<br><br>`)
            .append(`<b>Central Stores to Complete Packaging?:</b> ${csToComplete}<br>`)
            .append(`<b>Shipping Speed:</b> ${shipSpeed}<br>`)
            .append(`<b>Tracking Number Emailed?</b> ${trEmailed}<br><br>`)
            .append(`<b>Value: </b>$${price}<br>`)
            .append(`<b>Comments:</b> ${email}`);
        
        if (loc !== "personal") {
            $('#address_form').hide();
            print();
            $('#address_form').show();
        } 
        evt.preventDefault();
    })
})