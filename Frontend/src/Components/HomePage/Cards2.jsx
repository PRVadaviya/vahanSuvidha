import React from 'react'

import tractor_trolly from '../../assets/tractor_trolly.png';
import rotavator from '../../assets/rotavator.png';

import watertruck from '../../assets/watertruck3.jpg';
import wheelchair from '../../assets/wheelchair.png';

import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';


function Cards2() {

    const navigate = useNavigate()
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className='flex justify-center'><h2 class="text-2xl font-bold tracking-tight text-gray-900">All Equipment</h2></div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div className="group relative border-2 border-black rounded-md">
                        <img src={tractor_trolly} className="aspect-square w-full rounded-md bg-white-200  group-hover:opacity-75 lg:aspect-auto lg:h-80 object-contain" />
                        <div className='text-center text-green-600 mb-5 font-bold text-lg'>Agriculture Equipments</div>
                    </div>
                    <div className="group relative border-2 border-black rounded-md">
                        <img src={rotavator} className="aspect-square w-full rounded-md bg-white-200 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div className='text-center text-green-600 mb-5 font-bold text-lg'>Construction Equipments</div>
                    </div>
                    <div className="group relative border-2 border-black rounded-md">
                        <img src={watertruck} className="aspect-square w-full rounded-md bg-white-200 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div className='text-center text-green-600 mb-5 font-bold text-lg'> Transportation Equipments</div>
                    </div>
                    <div className="group relative border-2 border-black rounded-md">
                        <img src={wheelchair} className="aspect-square w-full rounded-md bg-white-200 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div className='text-center text-green-600 mb-5 font-bold text-lg'> Medical Equipments </div>
                    </div>
                </div>
                <div className='flex justify-center mt-20'>
                    <Button
                        onClick={() => navigate('/equipment')}
                        childern={'View All Equipments'}
                        type={'button'}
                        bgcolor='bg-green-700'
                    ></Button>
                </div>
            </div>
        </div>
    )
}

export default Cards2