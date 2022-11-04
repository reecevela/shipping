$(document).ready( () => {
    let to;
    let from;
    let loc;
    let currentInfo;
    let price;
    let email;

    const addressInfo = {
        personal: {
            cname: "",
            st: "",
            city: "",
            stZip: ""
        },
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
        sheldon: {
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

    const locationList = ['personal', 'gpcm', 'gpcw', 'sheldon', 'columbus'];

    $('#address_form').submit( (evt) => {
        to = $('#to').val();
        from = $('#from').val();
        price = $('#price').val();
        email = $('#email').val();

        for (let index = 0; index < locationList.length; index++) {
            if ($(`#${locationList[index]}`).is(':checked')) {
                loc = locationList[index];
                currentInfo = addressInfo[loc];
            }
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
            .append(`<b>Central Stores to Complete Packaging?: &#x25cb; Yes &#x25cb; No</b><br>`)
            .append(`<b>Check One: &#x25cb; Ground &#x25cb; 2 Day &#x25cb; Overnight</b><br>`)
            .append(`<b>Tracking Number Emailed? &#x25cb; Yes &#x25cb; No</b><br><br>`)
            .append(`<b>Value: </b>$${price}<br>`)
            .append(`<b>Comments: ${email}</b>`);
        
        if (loc !== "personal") {
            $('#address_form').hide();
            print();
            $('#address_form').show();
        } 
        evt.preventDefault();
    })
})