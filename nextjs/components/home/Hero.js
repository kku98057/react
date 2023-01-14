import React from "react";
import Animation from "../Animation";

function Hero(props) {
  return (
    <>
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
          Before they sold out
          <br className="hidden lg:inline-block" />
          readymade gluten
        </h1>
        <p className="mb-8 leading-relaxed">
          인생의 봄바람을 사랑의 것은 되는 아름다우냐? 실현에 남는 만천하의
          있으며, 찾아다녀도, 사는가 두기 사막이다. 목숨을 위하여서, 그들은 우는
          풀밭에 대고, 바이며, 이것이다. 동산에는 꽃이 가치를 작고 위하여서. 이
          그러므로 꽃 것은 뭇 사라지지 싸인 예가 따뜻한 운다. 몸이 영락과
          위하여서, 얼음과 풀밭에 살 봄바람을 물방아 칼이다. 우는 지혜는 같으며,
          옷을 방황하였으며, 피고, 우리는 설산에서 황금시대다. 같은 인생을
          그들에게 것이다. 황금시대의 때에, 그들은 찾아다녀도, 사막이다.
        </p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            보러가기
          </button>
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Animation />
      </div>
    </>
  );
}

export default Hero;
