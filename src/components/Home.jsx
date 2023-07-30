import React, { useState } from 'react';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';

const Home = () => {
  const [input1, setInputValue1] = useState(0);
  const [input2, setInputValue2] = useState(0);
  const [input3, setInputValue3] = useState(0);
  const [input4, setInputValue4] = useState(0);
  const [input5, setInputValue5] = useState(0);
  const [input6, setInputValue6] = useState(0);
  const [tooltipText, setTooltipText] = useState('Tooltip text');
  const [tooltipColor, setTooltipColor] = useState('Black');

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
        setTooltipColor(event.target.value);
    };
    const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
        setTooltipColor(event.target.value);
    };
    const handleInputChange3 = (event) => {
        setInputValue3(event.target.value);
        setTooltipColor(event.target.value);
    };
    const handleInputChange4 = (event) => {
        setInputValue4(event.target.value);
        setTooltipColor(event.target.value);
    };
    const handleInputChange5 = (event) => {
        setInputValue5(event.target.value);
        setTooltipColor(event.target.value);
    };
    const handleInputChange6 = (event) => {
        setInputValue6(event.target.value);
        setTooltipColor(event.target.value);
    };

     const handleTooltipTextChange = (event) => {
    setTooltipText(event.target.value);
  };
    const getCustomizedTooltip = () => {
        return (
          <Tooltip id="button-tooltip">
            <div
              style={{
                fontSize: input1,
                padding: input2,
                color: input3,
                backgroundColor: input4,
                borderRadius: input3,
              }}
            >
              {tooltipText}
            </div>
          </Tooltip>
        );
      };
  return (
    <> 
        <div className='container py-5'>
            <div className='row'>
                <div className='col-lg-8 pb-3'>
                    <div className='border p-3' style={{backgroundColor:"rgba(245, 245, 245, 1)", borderRadius:"23.395px"}}>
                        <div className='fw-semibold py-2'>Target Element</div>
                        <select className='form-select py-2'>
                            <option>Button1</option>
                            <option>Button2</option>
                            <option selected>Button3</option>
                            <option>Button4</option>
                            <option>Button5</option>
                        </select>
                        <div className='fw-semibold py-2'>Tooltip text</div>
                        <input className='form-control py-2' placeholder='Input' value={tooltipText} onChange={handleTooltipTextChange}/>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='fw-semibold py-2'>Text Size</div>
                                <input className='form-control py-2' placeholder='Input' type='number' value={input1} onChange={handleInputChange1}/>
                            </div>
                            <div className='col-6'>
                                <div className='fw-semibold py-2'>Padding</div>
                                <input className='form-control py-2' placeholder='Input' type='number' value={input2} onChange={handleInputChange2}/>
                            </div>
                        </div>
                        <div className='fw-semibold py-2'>Text Colour</div>
                        <input className='form-control py-2' placeholder='Input'/>
                        <div className='fw-semibold py-2'>Background colour</div>
                        <input className='form-control py-2' placeholder='Input'/>
                        <div className='row'>
                            <div className='col-6'>
                                <div className='fw-semibold py-2'>Corner radius</div>
                                <input className='form-control py-2' placeholder='Input' type='number' value={input3} onChange={handleInputChange3}/>
                            </div>
                            <div className='col-6'>
                                <div className='fw-semibold py-2'>Tooltip width</div>
                                <input className='form-control py-2' placeholder='Input' type='number' value={input4} onChange={handleInputChange4}/>
                            </div>
                        </div><div className='row'>
                            <div className='col-6'>
                                <div className='fw-semibold py-2'>Arrow width</div>
                                <input className='form-control py-2' placeholder='Input' type='number' value={input5} onChange={handleInputChange5}/>
                            </div>
                            <div className='col-6'>
                                <div className='fw-semibold py-2'>Arrow height</div>
                                <input className='form-control py-2' placeholder='Input' type='number' value={input6} onChange={handleInputChange6}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                    <div className='p-3' style={{backgroundColor:"rgba(44, 44, 44, 1)",borderRadius:"29px"}}>
                        <div className='p-3 d-flex flex-column justify-content-between' style={{backgroundColor:"rgba(245, 245, 245, .4)",borderRadius:"29px",height:"597.004px"}}>
                            <div className='d-flex justify-content-between'>
                            <OverlayTrigger placement='top' overlay={getCustomizedTooltip()}>
                                <a className='btn bg-white'>Button1</a>
                            </OverlayTrigger>
                            <OverlayTrigger placement='top' overlay={getCustomizedTooltip()}>
                                <a className='btn bg-white'>Button2</a>
                            </OverlayTrigger>
                            </div>
                            <div className='text-center'>
                            <OverlayTrigger placement='top' overlay={getCustomizedTooltip()}>
                                <a className='btn bg-white'>Button3</a>
                            </OverlayTrigger>
                            </div>
                            <div className='d-flex justify-content-between'>
                            <OverlayTrigger placement='top' overlay={getCustomizedTooltip()}>
                                <a className='btn bg-white'>Button4</a>
                            </OverlayTrigger>
                            <OverlayTrigger placement='top' overlay={getCustomizedTooltip()}>
                                <a className='btn bg-white'>Button5</a>
                            </OverlayTrigger>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home
