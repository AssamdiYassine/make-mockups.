var Jimp = require("jimp");
const crypto = require("crypto");
async function makeMockup(logos,i) {
  console.log("start");
  var MOCKUP = [
    {
      name: "MOCKUP/CHACHINE-MAROON.jpg",
      with: 1000,
      hight: 850,
      retation: 1.3,
      resize: 1200,
      place: "Chachine/",
    },
    {
      name: "MOCKUP/CHACHINE-white.jpg",
      with: 1000,
      hight: 1200,
      retation: 1,
      resize: 1000,
      place: "Chachine/",
    },
    {
      name: "MOCKUP/CHACHINE-BABYBLUE.jpg",
      with: 1900,
      hight: 2000,
      retation: -0.5,
      resize: 3200,
      place: "Chachine/",
    },
    {
      name: "MOCKUP/CHACHINE-BLACK.jpg",
      with: 1010,
      hight: 800,
      retation: 1.5,
      resize: 1150,
      place: "Chachine/",
    },
    {
      name: "MOCKUP/CHACHINE-GREY-HEATHER.jpg",
      with: 1100,
      hight: 1000,
      retation: 1.5,
      resize: 1020,
      place: "Chachine/",
    },
    {
      name: "MOCKUP/CHACHINE-NAVY.jpg",
      with: 1480,
      hight: 1250,
      retation: 1,
      resize: 1700,
      place: "Chachine/",
    },
    {
      name: "MOCKUP/CHACHINE-HEATHER-PEACH.jpg",
      with: 600,
      hight: 550,
      retation: 0.5,
      resize: 700,
      place: "Chachine/",
    },

    //---------------------------------------
    // {
    //   name: "MOCKUP/ESHASHOPE-BABYBLUE.jpg",
    //   with: 490,
    //   hight: 520,
    //   retation: -0.2,
    //   resize: 870,
    //   place: "Eshashope/",
    // },
    //  {
    //   name: "MOCKUP/ESHASHOPE-BLACK.jpg",
    //   with: 600,
    //   hight: 450,
    //   retation: 2.5,
    //   resize: 790,
    //   place: "Eshashope/",
    // },
    // {
    //   name:"MOCKUP/ESHASHOPE-HEATHER-PEACH.jpg",
    //   with: 530,
    //   hight: 600,
    //   retation: 0.4,
    //   resize: 730,
    //   place: "Eshashope/",
    // },
    // {
    //   name: "MOCKUP/ESHASHOPE-WHITE.jpg",
    //   with: 500,
    //   hight: 500,
    //   retation: 0.2,
    //   resize: 830,
    //   place: "Eshashope/",
    // },
    // {
    //   name:"MOCKUP/ESHASHOPE-MAROON.jpg",
    //   with: 500,
    //   hight: 550,
    //   retation: 0.8,
    //   resize: 1020,
    //   place: "Eshashope/",
    // },
  ];

  const dir = crypto.randomBytes(6).toString("hex");
  MOCKUP.forEach(async (MOCKUPs, index) => {
    Jimp.read(MOCKUPs.name, async (err, lenna) => {
      if (err) {
        throw err;
      }

      await Jimp.read(logos, async (err, logS) => {
        console.log(" ------"+logS);
        logS
          .resize(
            MOCKUPs.resize,
            Jimp.AUTO,
            Jimp.HORIZONTAL_ALIGN_CENTER | Jimp.VERTICAL_ALIGN_TOP
          )
          .rotate(MOCKUPs.retation);
        if (err) {
          throw err;
        }

        lenna.composite(logS, MOCKUPs.with, MOCKUPs.hight);
        lenna.write(`${MOCKUPs.place}nich-${i}/${index}.jpg`);
      });
    });
  });
}

const moduleBuilder =   (logos,i) => {
  makeMockup(logos,i);
};

module.exports = moduleBuilder;
