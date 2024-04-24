const orgChart = [
    {
      name: "Grand pa",
      attributes: {
        marrade: "Marrade to mayi lum",
        keyB: "Total of 9 children",
        keyC: "val C",
        image:require('../images/2.jpg')

      },
      children: [
        {
          name: "Avadhoot",
          attributes: {
            keyA: "val A",
            keyB: "val B",
            keyC: "val C"
          },
          children: [
            {
              name: "Richard"
            },
            {
              name: "Constantine",
              children: [
                {
                  name: "Mia"
                }
              ]
            },
            {
              name: "Daniel"
            }
          ]
        },
        {
          name: "Mia"
        },
        {
          name: "Varun",
          attributes: {
            keyA: "val A",
            keyB: "val B",
            keyC: "val C"
          },
          children: [
            {
              name: "Ivo",
              attributes: {
                keyA: "val A",
                keyB: "val B",
                keyC: "val C"
              },
              children: [
                {
                  name: "Level 2: A",
                  attributes: {
                    keyA: "val A",
                    keyB: "val B",
                    keyC: "val C"
                  },
                  children: [
                    {
                      name: "Level 2: A",
                      attributes: {
                        keyA: "val A",
                        keyB: "val B",
                        keyC: "val C"
                      }
                    },
                    {
                      name: "Level 2: B"
                    }
                  ]
                },
                {
                  name: "Level 2: B"
                }
              ]
            },
            {
              name: "Vijay"
            }
          ]
        },
        {
          name: "Mohit",
          children: [
            {
              name: "Rohit",
              attributes: {
                keyA: "val A",
                keyB: "val B",
                keyC: "val C"
              },
              children: [
                {
                  name: "Level 2: A",
                  attributes: {
                    keyA: "val A",
                    keyB: "val B",
                    keyC: "val C"
                  },
                  children: [
                    {
                      name: "Level 2: A",
                      attributes: {
                        keyA: "val A",
                        keyB: "val B",
                        keyC: "val C"
                      }
                    },
                    {
                      name: "Level 2: B"
                    }
                  ]
                }
              ]
            },
            {
              name: "Pranav"
            }
          ]
        }
      ]
    }
  ];
  

  export default orgChart;