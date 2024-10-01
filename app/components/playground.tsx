import InputField from "./inputField";

type PlaygroundProp = {
    value: String
}

function Playground({ value }: PlaygroundProp) {
    // return (
    //     <div>
    //         <div className="h-[75vh] w-[80vw] rounded-3xl relative p-6 bg-white/5 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-black/60 before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/60 before:via-transparent before:to-transparent before:rounded-3xl before:opacity-20 after:absolute after:inset-0 after:bg-gradient-radial after:from-transparent after:via-white/20 after:to-transparent after:rounded-3xl after:opacity-10 flex justify-between">
    //             <div className="h-[100%] w-[50%] rounded-3xl backdrop-blur-md bg-white absolute transition-all duration-500 ease-in-out left-0" id="output-area"></div>
    //             <InputField />
    //         </div>
    //     </div>
    // )
    return value === "image" ? (
        <div>
            <div className="h-[75vh] w-[80vw] rounded-3xl relative p-6 bg-white/5 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-black/60 before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/60 before:via-transparent before:to-transparent before:rounded-3xl before:opacity-20 after:absolute after:inset-0 after:bg-gradient-radial after:from-transparent after:via-white/20 after:to-transparent after:rounded-3xl after:opacity-10 flex justify-between">
                <div className="h-[100%] w-[50%] rounded-3xl backdrop-blur-md bg-white"></div>
                <InputField value={"Image"} />
            </div>
        </div>
    ) : (
        <div>
            <div className="h-[75vh] w-[80vw] rounded-3xl relative p-6 bg-white/5 backdrop-blur-3xl border border-white/20 shadow-2xl shadow-black/60 before:absolute before:inset-0 before:bg-gradient-to-t before:from-white/60 before:via-transparent before:to-transparent before:rounded-3xl before:opacity-20 after:absolute after:inset-0 after:bg-gradient-radial after:from-transparent after:via-white/20 after:to-transparent after:rounded-3xl after:opacity-10 flex justify-between">
                <InputField value={"Video"} />
                <div className="h-[100%] w-[50%] rounded-3xl backdrop-blur-md bg-white"></div>
            </div>
        </div>
    )
}

export default Playground;