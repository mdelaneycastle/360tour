var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "Entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.7458964747068251,
          "pitch": 0.4645029098488127,
          "rotation": 5.497787143782138,
          "target": "1-connolly"
        },
        {
          "yaw": 0.6778234534453791,
          "pitch": 0.4201550464362498,
          "rotation": 0.7853981633974483,
          "target": "10-graceland"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-connolly",
      "name": "Connolly",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.4687070152656734,
          "pitch": 0.2870725826281948,
          "rotation": 1.5707963267948966,
          "target": "8-mergeentrance"
        },
        {
          "yaw": 1.9418767215767083,
          "pitch": 0.41553198760365717,
          "rotation": 3.141592653589793,
          "target": "9-counter"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-backmeeting",
      "name": "BackMeeting",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5040705210214416,
          "pitch": 0.43479521608156446,
          "rotation": 0,
          "target": "5-opposite-bar"
        },
        {
          "yaw": -1.629360656880138,
          "pitch": 0.5171486112235542,
          "rotation": 1.5707963267948966,
          "target": "3-firedoor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-firedoor",
      "name": "Firedoor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0819775464769279,
          "pitch": 0.5418639136524313,
          "rotation": 0,
          "target": "4-backcorner"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-backcorner",
      "name": "Backcorner",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.8203974114434196,
          "pitch": 0.40735308529656855,
          "rotation": 21.991148575128566,
          "target": "5-opposite-bar"
        },
        {
          "yaw": 2.50049888056893,
          "pitch": 0.5631660869476747,
          "rotation": 3.141592653589793,
          "target": "3-firedoor"
        },
        {
          "yaw": 0.9414665219563059,
          "pitch": 0.7440682557717544,
          "rotation": 1.5707963267948966,
          "target": "2-backmeeting"
        },
        {
          "yaw": -0.6102983331209728,
          "pitch": 0.2668850074411644,
          "rotation": 3.141592653589793,
          "target": "7-darkentrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-opposite-bar",
      "name": "opposite bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.8773078020739931,
          "pitch": 0.4039232418409284,
          "rotation": 0,
          "target": "4-backcorner"
        },
        {
          "yaw": 0.659817946418805,
          "pitch": 0.2927388973523044,
          "rotation": 0,
          "target": "6-bar"
        },
        {
          "yaw": -0.9870629502337778,
          "pitch": 0.6076902296540556,
          "rotation": 4.71238898038469,
          "target": "2-backmeeting"
        },
        {
          "yaw": 0.09627478300578218,
          "pitch": 0.24699621919160641,
          "rotation": 3.141592653589793,
          "target": "7-darkentrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-bar",
      "name": "bar",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.704564199724354,
          "pitch": 0.4836875773092473,
          "rotation": 4.71238898038469,
          "target": "7-darkentrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-darkentrance",
      "name": "darkentrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9318775911918991,
          "pitch": 0.34410924209029403,
          "rotation": 0,
          "target": "4-backcorner"
        },
        {
          "yaw": 0.6523585080465715,
          "pitch": 0.3151874290569694,
          "rotation": 0,
          "target": "2-backmeeting"
        },
        {
          "yaw": -1.219365623681906,
          "pitch": 0.36195332833894867,
          "rotation": 0,
          "target": "8-mergeentrance"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-mergeentrance",
      "name": "mergeentrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.016821474321213614,
          "pitch": 0.4874708363818314,
          "rotation": 4.71238898038469,
          "target": "7-darkentrance"
        },
        {
          "yaw": 1.3560408521007155,
          "pitch": 0.49437572281396136,
          "rotation": 4.71238898038469,
          "target": "9-counter"
        },
        {
          "yaw": 1.634446017680859,
          "pitch": 0.2860251781282077,
          "rotation": 1.5707963267948966,
          "target": "1-connolly"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-counter",
      "name": "counter",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.371920347584849,
          "pitch": 0.49965495665252924,
          "rotation": 0.7853981633974483,
          "target": "8-mergeentrance"
        },
        {
          "yaw": -0.5966359327588755,
          "pitch": 0.4031515757402424,
          "rotation": 5.497787143782138,
          "target": "10-graceland"
        },
        {
          "yaw": 0.5863124072627386,
          "pitch": 0.4023005436613971,
          "rotation": 0.7853981633974483,
          "target": "1-connolly"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-graceland",
      "name": "graceland",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 960,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.0538837632075397,
          "pitch": 0.5421437237349878,
          "rotation": 2.356194490192345,
          "target": "0-entrance"
        },
        {
          "yaw": -2.013842101605622,
          "pitch": 0.4707860687822567,
          "rotation": 3.9269908169872414,
          "target": "9-counter"
        },
        {
          "yaw": -2.2185067532444087,
          "pitch": 0.3033347903924657,
          "rotation": 0,
          "target": "8-mergeentrance"
        },
        {
          "yaw": 2.9200980567513657,
          "pitch": 0.44309020083393413,
          "rotation": 0,
          "target": "1-connolly"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
