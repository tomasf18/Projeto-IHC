function WorkItem({ cardImage, text }: { cardImage: string; text: string }) {
  return (
    <div className="flex rounded-xl border border-gray-200 shadow-md flex-col h-64 w-72 m-6">
      <img
        src={cardImage}
        alt={text}
        className="rounded-t-lg h-48 mx-2 mt-2 object-cover"
      />
      <div className="flex h-full flex-col justify-center">
        <div className="flex flex-col justify-center items-center">
          <p className="text-center text-sm font-medium">{text}</p>
        </div>
      </div>
    </div>
  );
}

export default WorkItem;