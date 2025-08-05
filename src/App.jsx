import { Card } from "@/components/ui/card";

export default function Raspberrysoft() {
  return (
    <div className="font-sans text-gray-800 bg-white">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-100 to-rose-50 text-center px-4">
        <div>
          <h1 className="text-5xl font-bold text-rose-700">Raspberrysoft</h1>
          <p className="text-xl mt-4">진짜 실력으로 만드는 소프트웨어</p>
          <button className="mt-6 px-6 py-2 bg-rose-600 text-white rounded-xl hover:bg-rose-700 transition">
            포트폴리오 보기
          </button>
        </div>
      </section>

      {/* About Us */}
      <section className="max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-semibold mb-4">회사 소개</h2>
        <p className="text-lg">
          Raspberrysoft는 경력 20년 이상의 개발자 2인과 디자이너 1인으로 구성된 기술 중심 소프트웨어 개발사입니다.
          복잡한 문제를 단순하고 우아하게 해결하는 데 집중하며, 다양한 산업과 기술 경험을 바탕으로 고품질의 디지털 솔루션을 제공합니다.
        </p>
      </section>

      {/* Team Section */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center">팀 소개</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* 한창숙 */}
            <Card className="p-6 text-center">
              <img src="/han.jpg" alt="한창숙" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <h3 className="text-xl font-bold">한창숙</h3>
              <p className="text-sm text-gray-500 mb-2">백엔드 개발자 / 25년 경력</p>
              <p className="text-sm">
                Java, Spring, AEM, 공공/금융 시스템 중심의 전문가. 다양한 프레임워크와 대형 프로젝트 경험 보유.
              </p>
            </Card>

            {/* 이경주 */}
            <Card className="p-6 text-center">
              <img src="/lee.jpg" alt="이경주" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <h3 className="text-xl font-bold">이경주</h3>
              <p className="text-sm text-gray-500 mb-2">백엔드 개발자 / 30년 경력</p>
              <p className="text-sm">
                국내외 다양한 기업 및 공공기관 대상 Java 기반 시스템 개발. JSP, Oracle, 퍼블리싱 경험 다수.
              </p>
            </Card>

            {/* 조미경 */}
            <Card className="p-6 text-center">
              <img src="/cho.jpg" alt="조미경" className="mx-auto rounded-full w-24 h-24 mb-4" />
              <h3 className="text-xl font-bold">조미경</h3>
              <p className="text-sm text-gray-500 mb-2">UX/UI 디자이너 / 20년 경력</p>
              <p className="text-sm">
                금융, 공공기관, 모바일 앱까지 아우르는 UX/UI 설계 및 디자인 전문가. Photoshop, XD, 웹표준에 능숙.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 text-center bg-white">
        <h2 className="text-3xl font-semibold mb-4">문의하기</h2>
        <p className="mb-4 text-lg">이메일: <a href="mailto:raspberrysoft@example.com" className="text-rose-600 hover:underline">raspberrysoft@example.com</a></p>
        <button className="px-6 py-2 bg-rose-600 text-white rounded-xl hover:bg-rose-700">
          이메일 보내기
        </button>
      </section>
    </div>
  );
}