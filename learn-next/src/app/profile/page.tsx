
type ProfileType = {
    id: number;
    name: string;
    avatar: string;
}

export default async function page() {
    let profiles: ProfileType[] = [];
    try {
        const response = await fetch("https://679ef577946b0e23c06463c2.mockapi.io/api/profile/user-profiles");
        profiles = await response.json();
        console.log(profiles)
    }
    catch (err) {
        console.log(err);
    }

    return (
        <main className="h-[calc(100vh-7rem)] bg-[#001] grid grid-cols-4 gap-4 py-4 px-4">
            {
                profiles.map((profile: ProfileType) => (
                    <div className="bg-slate-900 py-4 px-6 rounded-xl flex items-center duration-200 ease-in-out hover:scale-110"
                        key={profile.id}
                    >
                        <img src="https://ia600305.us.archive.org/31/items/discordprofilepictures/discordblue.png"
                            alt={`${profile.name}'s avatar`}
                            className="h-12 rounded-full mr-4 cursor-pointer"
                            style={{ filter: `hue-rotate(${profile.id + profiles.length}deg)` }}
                        />
                        <h1 className="text-xl">{profile.name}</h1>
                    </div>
                )
                )
            }
        </main >
    )
}
