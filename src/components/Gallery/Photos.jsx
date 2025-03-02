import photos from "../../Data/photos.json";
import './Photos.scss';

const Photos=({selectedTags,isTagPanelOpen})=>{
    const filteredPhotos=selectedTags ? photos.filter((photo)=>photo.tags.includes(selectedTags)) : photos;
    return(
<div className={`photos ${isTagPanelOpen ? "with-tags-open" : ""}`}>
    {filteredPhotos.map((photo)=>(
        <section className='photos__photo' key={photo.id}>
            <img src={photo.photo} alt={photo.photographer} className="gallery__image"/>
            {photo.tags.map((tag,index)=>(
                <p key={index}>{tag}</p>
            ))}
        </section>
    ))}
</div>
    )

}
export default Photos;