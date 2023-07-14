import React from "react";
import { useDispatch } from "react-redux";
import { removeFavoriteStation } from "../../slices/FavoriteStationsSlice";
import { setMap } from "../../slices/MapSlice";
import { station } from "../../Models/station";

type Props = {
  station: station;
};

function StationCardFavorite({ station }: Props) {
  const dispatch = useDispatch();

  return (
    <div
      className=" hover:cursor-pointer hover:bg-neutral-200 duration-300 p-2 even:bg-neutral-100"
      onClick={(e) => {
        if (e.target != document.getElementById("favorite")) {
          return dispatch(setMap({ value: station.id }));
        }
      }}
    >
      <div className="flex  items-center justify-between">
        <span className="text-md mb-2 font-extrabold uppercase text-gray-500">
          {station.name}
        </span>

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          className="w-7 fill-yellow-300 hover:cursor-pointer mr-1 hover:fill-gray-700 duration-300"
          onClick={() => {
            console.log("werkt");

            dispatch(removeFavoriteStation(station.id));
          }}
        >
          <path
            id="favorite"
            d="M381.2 150.3L524.9 171.5C536.8 173.2 546.8 181.6 550.6 193.1C554.4 204.7 551.3 217.3 542.7 225.9L438.5 328.1L463.1 474.7C465.1 486.7 460.2 498.9 450.2 506C440.3 513.1 427.2 514 416.5 508.3L288.1 439.8L159.8 508.3C149 514 135.9 513.1 126 506C116.1 498.9 111.1 486.7 113.2 474.7L137.8 328.1L33.58 225.9C24.97 217.3 21.91 204.7 25.69 193.1C29.46 181.6 39.43 173.2 51.42 171.5L195 150.3L259.4 17.97C264.7 6.954 275.9-.0391 288.1-.0391C300.4-.0391 311.6 6.954 316.9 17.97L381.2 150.3z"
          />
        </svg>
      </div>
      <div className="flex mb-3 mr-3 items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="w-5 fill-red-500 mr-2"
        >
          <path d="M176 256C176 211.8 211.8 176 256 176C300.2 176 336 211.8 336 256C336 300.2 300.2 336 256 336C211.8 336 176 300.2 176 256zM256 0C273.7 0 288 14.33 288 32V66.65C368.4 80.14 431.9 143.6 445.3 224H480C497.7 224 512 238.3 512 256C512 273.7 497.7 288 480 288H445.3C431.9 368.4 368.4 431.9 288 445.3V480C288 497.7 273.7 512 256 512C238.3 512 224 497.7 224 480V445.3C143.6 431.9 80.14 368.4 66.65 288H32C14.33 288 0 273.7 0 256C0 238.3 14.33 224 32 224H66.65C80.14 143.6 143.6 80.14 224 66.65V32C224 14.33 238.3 0 256 0zM128 256C128 326.7 185.3 384 256 384C326.7 384 384 326.7 384 256C384 185.3 326.7 128 256 128C185.3 128 128 185.3 128 256z" />
        </svg>
        <span className="font-bold s text-sm">{station.address}</span>
      </div>
      <div className="font-extrabold text-gray-500 text-2xl flex">
        <div className="flex mr-3 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 640 512"
            className="w-9 fill-veloorange mr-2"
          >
            <path d="M347.2 32C358.1 32 369.8 38.44 375.4 48.78L473.3 229.1C485.5 226.1 498.5 224 512 224C582.7 224 640 281.3 640 352C640 422.7 582.7 480 512 480C441.3 480 384 422.7 384 352C384 311.1 402.4 276.3 431.1 252.8L409.4 212.7L324.7 356.2C320.3 363.5 312.5 368 304 368H255C247.1 431.1 193.3 480 128 480C57.31 480 0 422.7 0 352C0 281.3 57.31 224 128 224C138.7 224 149.2 225.3 159.2 227.8L185.8 174.7L163.7 144H120C106.7 144 96 133.3 96 120C96 106.7 106.7 96 120 96H176C183.7 96 190.1 99.71 195.5 105.1L222.9 144H372.3L337.7 80H311.1C298.7 80 287.1 69.25 287.1 56C287.1 42.75 298.7 32 311.1 32H347.2zM440 352C440 391.8 472.2 424 512 424C551.8 424 584 391.8 584 352C584 312.2 551.8 280 512 280C508.2 280 504.5 280.3 500.8 280.9L533.1 340.6C539.4 352.2 535.1 366.8 523.4 373.1C511.8 379.4 497.2 375.1 490.9 363.4L458.6 303.7C447 316.5 440 333.4 440 352V352zM108.8 328.6L133.1 280.2C131.4 280.1 129.7 280 127.1 280C88.24 280 55.1 312.2 55.1 352C55.1 391.8 88.24 424 127.1 424C162.3 424 190.9 400.1 198.2 368H133.2C112.1 368 99.81 346.7 108.8 328.6H108.8zM290.3 320L290.4 319.9L217.5 218.7L166.8 320H290.3zM257.4 192L317 274.8L365.9 192H257.4z" />
          </svg>
          <span>{station.free_bikes}</span>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
            className="w-8 fill-blue-600 mr-2"
          >
            <path d="M192 256V192H240C257.7 192 272 206.3 272 224C272 241.7 257.7 256 240 256H192zM384 32C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96C0 60.65 28.65 32 64 32H384zM336 224C336 170.1 293 128 240 128H168C145.9 128 128 145.9 128 168V352C128 369.7 142.3 384 160 384C177.7 384 192 369.7 192 352V320H240C293 320 336 277 336 224z" />
          </svg>
          <span>{station.empty_slots}</span>
        </div>
      </div>
    </div>
  );
}

export default StationCardFavorite;
