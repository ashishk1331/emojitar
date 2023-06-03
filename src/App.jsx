import Avatar from "./lib/Emojitar";

export default function () {
    return (
        <main className="w-full min-h-screen flex flex-col items-center gap-8 p-16 px-24">
            <div className="w-full lg:w-1/2 flex items-center justify-between bg-zinc-400/10 p-2 px-4 rounded-md">
                <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Avatar with value prop
                </h1>
                <Avatar value="best_user@gmail.com" />
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-between p-2 px-4">
                <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Avatar with display value prop
                </h1>
                <Avatar value="best_user@gmail.com" displayValue="BU" />
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-between bg-zinc-400/10 p-2 px-4 rounded-md">
                <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Avatar with emoji prop
                </h1>
                <Avatar value="best_user@gmail.com" emoji />
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-between p-2 px-4">
                <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Avatar with size prop
                </h1>
                <Avatar value="best_user@gmail.com" size={56} />
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-between bg-zinc-400/10 p-2 px-4 rounded-md">
                <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Avatar with shadow prop
                </h1>
                <Avatar value="best_user@gmail.com" shadow />
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-between p-2 px-4">
                <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Avatar with radius prop
                </h1>
                <Avatar value="best_user@gmail.com" radius={10} />
            </div>

            <div className="w-full lg:w-1/2 flex items-center justify-between bg-zinc-400/10 p-2 px-4 rounded-md">
                <h1 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                    Avatar with value prop
                </h1>
                <Avatar
                    value="best_user@gmail.com"
                    border
                    borderSize={3}
                    borderColor="black"
                />
            </div>

            <div className="w-2/3 flex items-center gap-6 justify-around mb-12">
                <Avatar value="best_user@gmail.com" />
                <Avatar value="best_user@gmail.com" displayValue="BU" />
                <Avatar value="best_user@gmail.com" emoji />
                <Avatar value="best_user@gmail.com" size={56} />
                <Avatar value="best_user@gmail.com" shadow />
                <Avatar value="best_user@gmail.com" radius={10} />
                <Avatar
                    value="best_user@gmail.com"
                    border
                    borderSize={3}
                    borderColor="black"
                />
            </div>

            <div className="w-2/3 flex flex-wrap items-center gap-6 justify-around mb-12">
                {"abcdefghijklmnopqrstuvwxyz".split("").map((alphabet) => (
                    <Avatar value={alphabet} emoji/>
                ))}
                {"abcdefghijklmnopqrstuvwxyz".split("").map((alphabet) => (
                    <Avatar value={alphabet+alphabet} emoji/>
                ))}
                {"abcdefghijklmnopqrstuvwxyz".split("").map((alphabet) => (
                    <Avatar value={alphabet+alphabet+alphabet} emoji/>
                ))}
            </div>
        </main>
    );
}
