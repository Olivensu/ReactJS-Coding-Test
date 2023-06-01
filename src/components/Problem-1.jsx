import React, {useEffect, useState} from 'react';

const Problem1 = () => {
    const [data, setData] = useState([]);
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  useEffect(() => {
    const storedData = localStorage.getItem('data');
    if (storedData) {
      setData(JSON.parse(storedData));
    }
  }, []);
  const sortedData = [...data].sort((a, b) => {
    if (a.value2 === 'Active' && b.value2 !== 'Active') {
      return -1; 
    } else if (a.value2 !== 'Active' && b.value2 === 'Active') {
      return 1; 
    } else {
      return 0;
    }
  });
  const finalSortedData = [...data].sort((a, b) => {
    if (a.value2 === 'Active' && b.value2 !== 'Active') {
      return -1; 
    } else if (a.value2 !== 'Active' && b.value2 === 'Active') {
      return 1; 
    } else {
      return 0;
    }
  });

  const activeArray = data.filter((item) => item.value2 === 'Active');
  const completeArray = data.filter((item) => item.value2 === 'Completed');
  console.log(activeArray);
  console.log(data);

    const [show, setShow] = useState('all');

    const handleInputChange1 = (event) => {
        setInputValue1(event.target.value);
      };
    
      const handleInputChange2 = (event) => {
        setInputValue2(event.target.value);
      };
    
      const handleSave = () => {
        const updatedData = [...data, { value1: inputValue1, value2: inputValue2 }];
        setData(updatedData);
        localStorage.setItem('data', JSON.stringify(updatedData));
        setInputValue1('');
        setInputValue2('');
      };
    const handleClick = (val) =>{
        setShow(val);
    }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-1</h4>
                <div className="col-6 ">
                    <form  className="row gy-2 gx-3 align-items-center mb-4">
                        <div className="col-auto">
                            <input type="text" value={inputValue1} onChange={handleInputChange1} name='name' className="form-control" placeholder="Name"/>
                        </div>
                        <div className="col-auto">
                            <input type="text" value={inputValue2} onChange={handleInputChange2} name='status' className="form-control" placeholder="Status"/>
                        </div>
                        <div className="col-auto">
                            <button type="submit" onClick={handleSave}  className="btn btn-primary">Submit</button>
                            
                        </div>
                    </form>
                </div>
                <div className="col-8">
                    <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='all' && 'active'}`} type="button" onClick={()=>handleClick('all')}>All</button>
                        </li>
                        <li className="nav-item">
                            <button className={`nav-link ${show==='active' && 'active'}`} type="button" onClick={()=>handleClick('active')}>Active</button>
                        </li>
                        <li className="nav-item">
                            <button  className={`nav-link ${show==='completed' && 'active'}`} type="button" onClick={()=>handleClick('completed')}>Completed</button>
                        </li>
                    </ul>
                    <div className="tab-content"></div>
                    <table className="table table-striped ">
                        <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Status</th>
                        </tr>
                        </thead>
                        <tbody>
                        {show==='all' ? sortedData.map((item, index) => (
          <tr key={index}>
            <td>{item.value1}</td>
            <td>{item.value2}</td>
          </tr>
        )) : show==='active'? activeArray.map((item, index) => (
            <tr key={index}>
              <td>{item.value1}</td>
              <td>{item.value2}</td>
            </tr>
          ))
        : completeArray.map((item, index) => (
            <tr key={index}>
              <td>{item.value1}</td>
              <td>{item.value2}</td>
            </tr>
          ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Problem1;