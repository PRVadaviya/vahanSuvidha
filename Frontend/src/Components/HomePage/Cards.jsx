import React from 'react'

import car from '../../assets/car.png';
import tractor from '../../assets/tractor.jpg';
import bulldozer from '../../assets/bulldozer.jpg';
import truck from './truck.png'

import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';


function Cards() {

    const navigate = useNavigate();

    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <div className='flex justify-center'><h2 class="text-2xl font-bold tracking-tight text-gray-900">All Vehicles</h2></div>
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    <div
                        className="group relative border-2 border-black rounded-md"
                        onClick={() => navigate('/vehicles/passenger')}
                        style={{ cursor: 'pointer' }}>

                        <img src={car} className="aspect-square w-full rounded-md bg-white-200  group-hover:opacity-75 lg:aspect-auto lg:h-80 object-contain" />
                        <div className='text-center text-green-600 mb-5 font-bold text-lg'>Passanger Vehicles</div>
                    </div>
                    <div
                        className="group relative border-2 border-black rounded-md"
                        onClick={() => navigate('/vehicles/aggricultural')}
                        style={{ cursor: 'pointer' }}>
                        <img src={tractor} className="aspect-square w-full rounded-md bg-white-200 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div className='text-center text-green-600 mb-5 font-bold text-lg'>Agriculture Vehicles</div>
                    </div>
                    <div
                        className="group relative border-2 border-black rounded-md"
                        onClick={() => navigate('/vehicles/commercial')}
                        style={{ cursor: 'pointer' }}>
                        <img src={bulldozer} className="aspect-square w-full rounded-md bg-white-200 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div className='text-center text-green-600 mb-5 font-bold text-lg'>Construction Vehicles</div>
                    </div>
                    <div
                        className="group relative border-2 border-black rounded-md"
                        onClick={() => navigate('/vehicles/construction')}
                        style={{ cursor: 'pointer' }}>
                        <img src={truck} className="aspect-square w-full rounded-md bg-white-200 object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80" />
                        <div className='text-center text-green-600 mb-5 font-bold text-lg'>Commercial Vehicles</div>
                    </div>
                </div>
                <div className='flex justify-center mt-20'>
                    <Button
                        onClick={() => navigate('/vehicles')}
                        childern={'View All Vehicles'}
                        type={'button'}
                        bgcolor='bg-green-700'

                    ></Button>
                </div>
            </div>
        </div>
    )
}

export default Cards