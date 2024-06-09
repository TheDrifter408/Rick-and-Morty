import { LoadingProps } from "@/types";
import Image from "next/image";
import { Fragment } from "react";

export default function Loading({ type }:LoadingProps){
    switch(type){
        case 'Character':
            return(
                <>
                    <h1 className="text-xl font-bold text-center">Character Information</h1>
                    <div className="rounded-xl">
                    <Image className="mx-auto rounded-xl animate-pulse" width={300} height={300} src="https://placehold.co/300x300/png" alt="placeholder-image" />
                    </div>
                    <div>
                        <h2 className="flex gap-1 items-center">Name: 
                            <div className="bg-slate-700 rounded animate-pulse w-full h-2" style={{
                                animationDelay:`${1 * 0.05}`,
                                animationDuration: "1s"
                            }} /> 
                        </h2>
                        <h2 className="flex gap-1 items-center">Gender:
                            <div className="bg-slate-700 rounded animate-pulse w-full h-2" style={{
                                animationDelay:`${1 * 0.05}`,
                                animationDuration: "1s"
                            }}  />   
                                
                        </h2>
                        <h2 className="flex gap-1 items-center">Status: 
                            <div className="bg-slate-700 rounded animate-pulse w-full h-2" style={{
                                animationDelay:`${1 * 0.05}`,
                                animationDuration: "1s"
                            }} />
                                
                        </h2>
                        <h2 className="flex gap-1 items-center">Species: 
                            <div className="bg-slate-700 rounded animate-pulse w-full h-2" style={{
                                animationDelay:`${1 * 0.05}`,
                                animationDuration: "1s"
                            }} />         
                        </h2>
                        <h2 className="flex gap-1 items-center">Origin: 
                            <div className="bg-slate-700 rounded animate-pulse w-full h-2" style={{
                                animationDelay:`${1 * 0.05}`,
                                animationDuration: "1s"
                            }} />
                        </h2>
                    </div>
                </>
            )
        case 'Characters':
            return(
                <>
                   {
                    [...Array(20).keys()].map((key) => (
                        <Fragment key={key}>
                        <div id="box" className="grid justify-left my-1 p-3 border border-b-3 border-t-0 shadow shadow-grey-500 rounded-xl w-fit mx-auto transition duration-50 ease-in-out hover:scale-125 hover:bg-white">
                        <Image className="mx-auto rounded-xl animate-pulse" style={{
                            animationDelay:`${key * 0.05}`,
                            animationDuration: "1s"
                        }} width={300} height={300} src="https://placehold.co/300x300/png" alt={"placeholder-image"}  /> 
                        <h1 className="flex gap-1 items-center">Name: 
                            <div className="bg-slate-700 rounded animate-pulse w-full h-2 " style={{
                            animationDelay:`${key * 0.05}`,
                            animationDuration: "1s"
                        }} />
                        </h1>
                        <h2 className="flex gap-1 items-center">Status: 
                            <div className="bg-slate-700 rounded animate-pulse w-full h-2" style={{
                            animationDelay:`${key * 0.05}`,
                            animationDuration: "1s"
                        }} />
                        </h2>
                    </div>
                    </Fragment>
                    ))
                   } 
                </>
            )
        case 'Episodes':
            return(
                <>
                    {
                        [...Array(20).keys()].map((key) => (
                            <div key={key} className="border border-b-3 border-t-0 shadow shadow-grey-500 rounded-xl p-3 my-1 transition duration-50 ease-in-out hover:scale-105 hover:bg-white">
                            <div className="flex items-center justify-between">
                                <h1 className="flex gap-1 items-center font-semibold text-green-800">Name: 
                                    <div className="bg-slate-700 rounded animate-pulse w-20 h-2" style={{
                                    animationDelay:`${key * 0.05}`,
                                    animationDuration: "1s"
                                    }} />
                                </h1>
                                <h3 className="flex gap-1 items-center font-semibold text-lime-600">Date: 
                                    <div className="bg-slate-700 rounded animate-pulse w-20 h-2" style={{
                                    animationDelay:`${key * 0.05}`,
                                    animationDuration: "1s"
                                    }} />
                                </h3>
                        </div>
                        <div className="flex">
                            <p className="mr-1 font-semibold text-purple-500">Characters:</p>
                            <ul className="flex flex-wrap items-center gap-2">
                            {
                                [...Array(20).keys()]?.map((key) => (
                                    <li className="italic" key={key}>
                                        <div className="bg-slate-700 rounded animate-pulse w-20 h-2" style={{
                                    animationDelay:`${key * 0.05}`,
                                    animationDuration: "1s"
                                    }} />     
                                    </li>
                                    )
                                )
                            }
                            </ul>
                        </div>
                        </div>
                        ))
                    }       
                </>
            )
        case 'Locations':
            return(
                <div className="bg-slate-50 p-4 rounded-xl">
                <h3 className="font-semibold text-2xl text-center">
                    <div className="bg-slate-700 rounded animate-pulse my-1 ml-32 w-1/2 h-10" style={{
                                    animationDelay:`${1 * 0.05}`,
                                    animationDuration: "1s"
                                    }} />
                </h3>
                <h3 className="font-semibold text-xl text-center">
                    <div className="bg-slate-700 rounded animate-pulse my-1 ml-32 w-1/2 h-6" style={{
                                    animationDelay:`${1 * 0.05}`,
                                    animationDuration: "1s"
                                    }}/>
                </h3>
                <h2 className="font-semibold">Residents:</h2>
                <div className="grid gap-2 py-1 sm:grid-cols-2  md:grid-cols-3 xl:grid-cols-5 ">
                    {
                       [...Array(10).keys()].map((key) => (
                        <div key={key} className="w-full rounded-xl mx-auto transition duration-50 ease-in-out hover:scale-125">
                            <div className="rounded-xl mx-auto">
                            <Image loading="lazy" className="mx-auto rounded-xl animate-pulse" style={{
                            animationDelay:`${key * 0.05}`,
                            animationDuration: "1s"
                        }} src="https://placehold.co/150x150/png" alt={`${key}+ image`} width={150} height={150} />
                            </div>      
                            <p className="text-center font-semibold animate-pulse h-2 bg-slate-400 rounded-xl my-2 ml-14 w-20" style={{
                                animationDelay:`${key * 0.05}`,
                                animationDuration: "1s"
                            }} />
                        </div>
                       ))
                    }
                </div>
            </div>
            )   
    }
}