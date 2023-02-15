function VideoPlayer({ src, isPlaying }) {
  const vidRef = React.useRef(null);

  React.useEffect(() => {
    isPlaying ? vidRef.current.play() : vidRef.current.pause();
  });

  return (
    <video className="rounded-md" ref={vidRef} src={src} loop playsInline />
  );
}

function App() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  return (
    <div className="grid h-2/4 w-2/4 place-content-center m-auto mt-24">
      <button
        className="p-2 w-20 font-semibold my-3 bg-green-400 rounded-md active:bg-green-600"
        onClick={() => setIsPlaying(!isPlaying)}
      >
        {isPlaying ? "Pause" : "Play"}
      </button>

      <VideoPlayer
        isPlaying={isPlaying}
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("rootNode"));
root.render(<App />);
