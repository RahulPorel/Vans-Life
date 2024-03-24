import { nanoid } from 'nanoid';
import '../../styles/HostReviews.css'

export function Stars(props){
    const starsArray = []
    for(let i=0;i<props.rating;i++){
        starsArray.push(<p>⭐</p>)
    }
    return starsArray.map(() => <p key={nanoid()}>⭐</p>)   
}

export default function Reviews(){
    const reviewsData = [
        {
            rating: 5,
            name: "Elliot",
            date: "January 3, 2023",
            text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
            id: "1",
        },
        {
            rating: 5,
            name: "Sandy",
            date: "December 12, 2022",
            text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
            id: "2",
        },
    ]
    
    const reviewEl = reviewsData.map(review => {
        return (
            <div className="review" key={review.id} >
                <div className="review-stars">
                    <Stars rating={review.rating} />
                </div>
                <div className="review-author"><p className="review-author-name">{review.name}</p><p className="review-author-date">{review.date}</p></div>
                <div className="review-text"><p>{review.text}</p> </div>
                <div className="review-divider"></div>
            </div>
        )
    })
    
    return (
        <div className="reviews-container">
            <div className="reviews-header">
                <h1>Your reviews</h1>
                <p>Last <span style={{textDecoration: "underline", fontWeight: "bold"}}>30 days</span></p>
            </div>
            <div className="reviews-overall">
                <div className="reviews-overall-header">
                    <h1>5.0</h1><p>⭐ overall rating</p>
                </div>
                <div className="rating-overview">
                    <div className="rating-row"><p className='rating-text'>5 stars</p><div className="rating-line rating-5"></div><p>100%</p></div>
                    <div className="rating-row"><p className='rating-text'>4 stars</p><div className="rating-line"></div><p>0%</p></div>
                    <div className="rating-row"><p className='rating-text'>3 stars</p><div className="rating-line"></div><p>0%</p></div>
                    <div className="rating-row"><p className='rating-text'>2 stars</p><div className="rating-line"></div><p>0%</p></div>
                    <div className="rating-row"><p className='rating-text'>1 star</p><div className="rating-line"></div><p>0%</p></div>
                </div>
            </div>
            <h2>Reviews ({reviewsData.length})</h2>
            {reviewEl}
        </div>
    )
}