import ArtistLibraryBanner from "../artist-library/ArtistLibraryBanner";
import BrowseVocalFooter from "../cover-vocals/BrowseVocalFooter";
import BrowseVocalNavbar from "../cover-vocals/BrowseVocalNavbar";
import ArtistList from "./ArtistList";


const Page = () => {
    return (
        <div>
            <div className={` w-full `}>
                <div className=' bg-[#000000] '>
                    <div>
                        {/* navbar  */}

                        <BrowseVocalNavbar></BrowseVocalNavbar>

                        {/* website content  */}

                        <div className={``}>
                            <ArtistLibraryBanner></ArtistLibraryBanner>
                        </div>
                        <ArtistList />


                        {/* footer  */}
                        <BrowseVocalFooter></BrowseVocalFooter>
                    </div>
                </div>
            </div>
        </div>
    )
};


export default Page
