import React from 'react'
import Navbar from 'components/navbar';
import Tab from 'components/tab';
import Filter from 'components/filter';
import Kelas from 'components/kelas';
import Search from 'components/search';
import { useRecoilState, useRecoilValue } from 'recoil';
import classatom from 'store/atoms/ClassAtom';
import classselector from 'store/selectors/ClassSelector';

function Dashboard() {
    const [formstate, setformstate] = useRecoilState(classatom);
    const classvalue = useRecoilValue(classselector)
    return (
        <div className="relative">
            <Navbar></Navbar>
            <Tab>
                <div>
                    <p className='mt-5 mx-5 font-poppins font-bold text-[28px]'>Daftar Kelas</p>
                </div>
                <div className='grid grid-cols-12'>
                    <Filter></Filter>
                    <div className='col-span-9'>
                        <Search></Search>
                    { 
                        classvalue.map((x) => {
                        return(
                            <Kelas namakelas={x.namakelas}></Kelas>
                        )
                        })
                    }
                    {console.log(classvalue)}
                    </div>
                </div>
                
            </Tab>
        </div>
    )
}

export default Dashboard