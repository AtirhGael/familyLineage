import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tree from 'react-d3-tree';
import orgChart from '../constant/data/data';
import './index.css'
const img1 = require('../constant/images/family.png')


const test = {
    shape: "rect",
    shapeProps: {
      width: 10,
      height: 10,
      x: -20,
      y: 20,
      stroke: "#2F80ED"
    }
  };


class NodeLabel extends React.PureComponent {
    render() {
      const { className, nodeData } = this.props;
      return (
        <div
          className={className}
          style={{
            background: "#ffffff",
            height: "100px",
            borderTop: "2px solid #2F80ED",
            textAlign: "center",
            // position: "fixed",
            zIndex: "1000",
            // left: "-10px",
            boxShadow: "0px 10px 10px rgba(0, 0, 0, 0.1)",
            padding: "5px 0",
            borderRadius: "100px"
          }}
        >
          <p>Name: Rahul</p>
          <p>Role: General Manager</p>
          <img src= {require("../constant/images/9.jpg")} alt='imagename' style={{height:25,width:30}}/>
  
          {nodeData.name}
        </div>
      );
    }
  }
  

const Welcome = () => {
  return (
    <>
    <Grid maxWidth={'80%'} margin={'auto'}>
        <Grid container spacing={2} sx={{justifyContent:'center',alignItems:"center"}}  >
            <Grid item xs={12} sm={12} md={12} lg={6} >
            <Box>
                <div className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white'>
                    Dear Visitors, Welcome to [Family Name] Heritage
                </div>
                <div className='py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300'>
                    your online gateway to explore and celebrate the rich tapestry of our family's history and legacy. Whether you're a member of our extended family or a curious visitor, we invite you to embark on a journey through generations past, present, and future.
                    {/* At [Family Name] Heritage, we believe that every family has a story worth preserving and sharing. Our mission is to provide a platform where our collective history comes alive through stories, photos, documents, and memories passed down through the ages.
                    As you navigate through our website, you'll discover fascinating tales of triumphs and challenges, cherished traditions, and the bonds that unite us across time and distance. From the earliest ancestors who laid the foundation to the youngest members who carry the torch forward, each individual contributes to the rich mosaic of our family heritage. */}
                    
                </div>
                </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6}>
                <img src={img1} alt='familyimage' style={{width:'100%',height:600}} />
            </Grid>
        </Grid>
    
        <div className='text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white lg:py-20 sm:py-20' >
            Our Family Heritage
        </div>

    </Grid>
        <div id="treeWrapper" style={{ width: "100%", height: "100vh" }} className='appp'>
        <Tree
          data={orgChart}
        //   nodeSvgShape={svgSquare}
        //   nodeSvgShape={test}
        onNodeClick={()=>console.log('hello world')}
          pathFunc="step"
          separation={{ siblings: 2, nonSiblings: 2 }}
          orientation="horizontal"
          translate={{ x: 900, y: 100 }}
          allowForeignObjects={true}
          nodeLabelComponent={{
            render: <NodeLabel className="myLabelComponentInSvg" />,
            foreignObjectWrapper: {
              width: 220,
              height: 200,
              y: -50,
              x: -100
            }
          }}
          initialDepth={0.02}
        />
      </div>
    </>
  );
};

export default Welcome;
