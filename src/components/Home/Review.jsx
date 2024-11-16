import ReviewCard from "../ReviewCard"


function Review() {
  return (
    <div className="my-10">
       <h1 className="text-4xl font-bold mb-8 text-center">User Review</h1>
       <div className="lg:flex items-center gap-4">
           <ReviewCard></ReviewCard>
           <ReviewCard></ReviewCard>
           <ReviewCard></ReviewCard>
           <ReviewCard></ReviewCard>
       </div>
    </div>
  )
}

export default Review
