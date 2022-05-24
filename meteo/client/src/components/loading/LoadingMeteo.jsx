import Skeleton from "react-loading-skeleton";

export default function LoadingMeteo() {
  return Array(6).fill({}).map((item, index) => {
    return (
      <div key={index} className="Sclete">
        <Skeleton baseColor="#202020" highlightColor="#444" className="skelet-item-one" circle={true} height={100} width={100} />
        <Skeleton baseColor="#202020" highlightColor="#444" className="skelet-item-two" height={30} count={6} />

      </div>
    )
  })
}
