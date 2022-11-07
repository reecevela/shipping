$(document).ready( () => {
    let to;
    let from;
    let loc;
    let currentInfo;
    let price;
    let email;
    let trEmailed;
    let dept;
    let csToComplete;
    let shipSpeed;
    let choose = false;

    const addressInfo = {
        Kent_Corp_HQ: {
            cname: "Kent Corporation Headquarters",
            st: "2905 U.S. Highway 61 North",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        Kent_Conference_Center: {
            cname: "Kent Conference Center",
            st: "1600 Oregon St",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        Kent_Marketing_Services: {
            cname: "Marketing Services",
            st: "1420 Park Avenue",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        MEC_Distribution_Center: {
            cname: "Distribution Center (MEC)",
            st: "1250 S 300 West",
            city: "Washington",
            stZip: "IN 47501"
        },
        Kent_Innovation_Center: {
            cname: "Kent Innovation Center",
            st: "2501 N. Loop Drive, Suite 1800 Building 1",
            city: "Ames",
            stZip: "IA 50010"
        },
        GSTC_Distribution_Center: {
            cname: "Distribution Center (GSTC)",
            st: "4815 55th Ave West",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        GPC_HQ_and_Plant: {
            cname: "GPCM",
            st: "1600 Oregon St",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        GPC_Washington_In: {
            cname: "GPC Washington",
            st: "1443 S 300 W",
            city: "Washington",
            stZip: "IN 47501"
        },
        Kent_Grain: {
            cname: "Kent Grain",
            st: "40 Main St",
            city: "Plainville",
            stZip: "IN, 47568"
        },
        KNG_HQ: {
            cname: "KNG HQ",
            st: "2905 U.S. Highway 61 North",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        KNG_Altoona_IA: {
            cname: "KNG Altoona, IA Plant",
            st: "203 1st Avenue North",
            city: "Altoona",
            stZip: "IA 50009"
        },
        KNG_Arcade_NY: {
            cname: "KNG Arcade NY",
            st: "50 William St",
            city: "Arcade",
            stZip: "NY 14009"
        },
        KNG_Bangor_Maine: {
            cname: "KNG Bangor, Maine Store",
            st: "876 Stillwater Ave.",
            city: "Bangor",
            stZip: "ME 04401"
        },
        KNG_Beardstown_IL: {
            cname: "KNG Beardstown, Illinois",
            st: "8679 Kent Feed Rd",
            city: "Beardstown",
            stZip: "IL 62618"
        },
        KNG_Bow_NH_Plant: {
            cname: "KNG",
            st: "520 Hall St",
            city: "Bow",
            stZip: "NH 03304"
        },
        KNG_Bow_NH_Store: {
            cname: "KNG",
            st: "520 Hall St",
            city: "Bow",
            stZip: "NH 03304"
        },
        KNG_Brandon_VT: {
            cname: "KNG",
            st: "57 Alta Woods P.O. Box 238",
            city: "Brandon",
            stZip: "VT 05733"
        },
        KNG_Columbus_NE: {
            cname: "KNG",
            st: "5445 East 23rd. St",
            city: "Columbus",
            stZip: "NE 68601"
        },
        KNG_Fishkill_NY: {
            cname: "KNG",
            st: "1570 Route 52",
            city: "Fishkill",
            stZip: "NY 12524"
        },
        KNG_Derry_NH: {
            cname: "KNG",
            st: "3 Martin St",
            city: "Derry",
            stZip: "NH 03038"
        },
        KNG_Hagerstown_MD: {
            cname: "KNG",
            st: "11431 Hopewell Rd.",
            city: "Hagerstown",
            stZip: "MD 21740"
        },
        KNG_Ireton_IA: {
            cname: "KNG",
            st: "801 Main St",
            city: "Ireton",
            stZip: "IA 51027"
        },
        KNG_Litchfield_CT: {
            cname: "99 Thomaston Rd. P.O. Box 73",
            st: "Litchfield",
            city: "CT 06759",
            stZip: "CT 06759"
        },
        KNG_Logansport_IN: {
            cname: "KNG",
            st: "2407 South 400 East",
            city: "Logansport",
            stZip: "IN 46947"
        },
        KNG_Marshall_MO: {
            cname: "KNG",
            st: "2855 West Arrow",
            city: "Marshall",
            stZip: "MO 65340"
        },
        KNG_Mason_MI: {
            cname: "KNG",
            st: "725 Hull Rd",
            city: "Mason",
            stZip: "MI 48854"
        },
        KNG_Milford_NH: {
            cname: "KNG",
            st: "274 Elm St P.O. Box 66",
            city: "Milford",
            stZip: "NH 03055"
        },
        KNG_North_Yarmouth_ME: {
            cname: "KNG",
            st: "14 The Lane",
            city: "North Yarmouth",
            stZip: "ME 04097"
        },
        KNG_Richford_VT: {
            cname: "KNG",
            st: "1 Webster St",
            city: "Richford",
            stZip: "VT 05476"
        },
        KNG_Rochester_NH: {
            cname: "KNG",
            st: "275 Portland St. P.O. Box 2052",
            city: "Rochester",
            stZip: "NH 03867"
        },
        KNG_Rockford_IL: {
            cname: "KNG",
            st: "1612 South Bend Rd",
            city: "Rockford",
            stZip: "IL 61109"
        },
        KNG_Sheldon_IA: {
            cname: "Kent Nutrition Group",
            st: "1500 RMT Ave",
            city: "Sheldon",
            stZip: "IA 51201"
        },
        KNG_Waterloo_IA: {
            cname: "KNG",
            st: "2233 West Airline Highway",
            city: "Waterloo",
            stZip: "IA 50703"
        },
        KNG_Watertown_NY: {
            cname: "KNG",
            st: "23175 Murrock Circle",
            city: "Watertown",
            stZip: "NY 13601"
        },
        KNG_Windham_ME: {
            cname: "KNG",
            st: "43 Main St.",
            city: "Windham",
            stZip: "ME 04062"
        },
        KPG_Headquarters_HQ: {
            cname: "KPG HQ",
            st: "2905 U.S. Highway 61 North",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        KPG_Worlds_Best_Cat_Litter: {
            cname: "World's Best Cat Litter",
            st: "1600 Oregon St.",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        KPG_FibreCycle_Headquarters_HQ_Helensvale_AUS: {
            cname: "KPG FibreCycle HQ",
            st: "Unit 1/ 18 Millenium Circuit",
            city: "Helensvale",
            stZip: "AUSTRALIA QLD 4212"
        },
        KPG_FibreCycle_Plant_Toowoomba_AUS: {
            cname: "KPG FibreCycle Plant",
            st: "21 Walters Drive",
            city: "Toowoomba",
            stZip: "QLD 4350 AUSTRALIA"
        },
        KPG_FibreCycle_Plant_Lonsdale_AUS: {
            cname: "KPG FibreCycle Plant",
            st: "19 Somerset Circuit",
            city: "Lonsdale",
            stZip: "SA 5160 AUSTRALIA"
        },
        KPG_FibreCycle_Plant_Scunthorpe_UK: {
            cname: "KPG FibreCycle Plant",
            st: "Phase 8 Celcius Parc, Park Farm Rd - Foxhills Industrial Estate",
            city: "Scunthorpe",
            stZip: "United Kingdom DN15 9YJ"
        },
        KPFG_Headquarters_HQ: {
            cname: "KPFG HQ",
            st: "209 Iowa Ave",
            city: "Muscatine",
            stZip: "IA 52761"
        },
        KPFG_Bolingbrook_IL: {
            cname: "KPFG",
            st: "1000 Dalton Ln",
            city: "Bolingbrook",
            stZip: "IL 60490"
        },
        KPFG_Columbus_MS: {
            cname: "KPFG",
            st: "1409 Hwy 45 South",
            city: "Columbus",
            stZip: "MS 39701"
        },
        KPFG_Foley_MN: {
            cname: "KPFG",
            st: "347 Glen St",
            city: "Foley",
            stZip: "MN 56329"
        },
        KPFG_New_Sharon_IA: {
            cname: "KPFG",
            st: "2175 150th St. P.O. Box 54",
            city: "New Sharon",
            stZip: "IA 50207"
        },
        KPFG_Superior_WI: {
            cname: "KPFG",
            st: "6120 Tower Ave",
            city: "Superior",
            stZip: "WI 54880"
        },
        KPFG_Sauk_Rapids_MN: {
            cname: "KPFG",
            st: "10 Industrial Blvd",
            city: "Sauk Rapids",
            stZip: "MN 56379"
        },
        Personal: {
        }
    }

    $('#setDefault').click( () => {
       // window.alert("To save  default settings, fill in any fields or checkboxes you want to be pre-set when you open the page, then bookmark the page. \n \n Recommended preset fields: \n From \n Dept. to charge \n Email \n Tracking # \n Central stores to complete packaging \n Shipping option");
        evt.preventDefault;
        //LEFT OFF HERE
    });

    // user enters own address instead of searching
    $('.self-entry').hide();

    $('#choose').change( (evt) => {
        const checkbox = evt.currentTarget;
        if(checkbox.checked) {
            choose = true;
            $('.choose-label').text("Check to search for an address");
            $('.self-entry').show();
            $('.search-entry').hide();
        } else {
            choose = false;
            $('.choose-label').text("Check to manually enter an address");
            $('.self-entry').hide();
            $('.search-entry').show();
        }
    });

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
        dpet = $('#dept').val();
        if (choose) {
            $('#location').val('Personal');
            addressInfo.Personal.cname = $('#cname').val();
            addressInfo.Personal.city = $('#city').val();
            addressInfo.Personal.st = $('#st').val();
            addressInfo.Personal.stZip = $('#stZip').val();
        }
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
            .append(`<b>State/Zip:</b> ${currentInfo.stZip}<br>`)
            .append(`<b>Dept to Charge:</b> ${dept}<br>`)
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