<template>
    <div id="resume">
        <h1>簡歷</h1>

        <section class="resume-section">
            <h2>學歷</h2>
            <div class="resume-item">
                <span class="year">2024-now</span>
                <span class="content">國立臺北科技大學 資訊與財金管理系（碩士）</span>
            </div>
            <div class="resume-item">
                <span class="year">2020-2024</span>
                <span class="content">國立高雄科技大學 智慧商務系（學士）</span>
            </div>
            <div class="resume-item">
                <span class="year">2017-2020</span>
                <span class="content">台中高工 資訊科（高職）</span>
            </div>
        </section>

        <section class="resume-section">
            <h2>經歷</h2>
            <div class="year-group">
                <span class="year">2025</span>
                <div class="items">
                    <div class="resume-item">IEEE GCCE 論文accept 鐵道轉轍器</div>
                    <div class="resume-item">學海築夢</div>
                    <div class="resume-item">blackwired 實習生</div>
                    <div class="resume-item">資服競賽 隱私強化組 第3名</div>
                    <div class="resume-item">IWAIT ACCEPT 遊戲惡意退款系統</div>
                    <div class="resume-item">信託業務金融證照</div>
                    <div class="resume-item">台灣好厲害入圍</div>
                    <div class="resume-item">南區技能分區競賽助理</div>
                    <div class="resume-item">網路與系統安全助教</div>
                </div>
            </div>
            <div class="year-group">
                <span class="year">2024</span>
                <div class="items">
                    <div class="resume-item">金融資通安全研究室 FC$LAB</div>
                    <div class="resume-item">Arzue AI 900</div>
                    <div class="resume-item">ISO 15408</div>
                    <div class="resume-item">IPAS 資安初級</div>
                    <div class="resume-item">PADI 潛水初級</div>
                    <div class="resume-item">AIS3 暑期課程學員</div>
                    <div class="resume-item">AIS3 最佳專題(跨領域)</div>
                    <div class="resume-item">HITCON 會眾</div>
                    <div class="resume-item">Google 資安人員培育計畫（結訓）</div>
                </div>
            </div>
            <div class="year-group">
                <span class="year">2023</span>
                <div class="items">
                    <div class="resume-item">國科會計劃</div>
                    <div class="resume-item">成大資管研討會 優勝</div>
                    <div class="resume-item">高科杯 佳作（理想機器人line bot ）</div>
                    <div class="resume-item">資服競賽入圍</div>
                </div>
            </div>
            <div class="year-group">
                <span class="year">2022</span>
                <div class="items">
                    <div class="resume-item">金融科技力證照</div>
                </div>
            </div>
            <div class="year-group">
                <span class="year">before-2021</span>
                <div class="items">
                    <div class="resume-item">電腦硬體裝修丙級</div>
                    <div class="resume-item">電腦軟體應用乙級</div>
                </div>
            </div>
        </section>

        <section class="resume-section">
            <h2>工作經驗</h2>
            <div class="year-group">
                <span class="year">2024</span>
                <div class="items">
                    <div class="resume-item">華鉬人資專員</div>
                </div>
            </div>
            <div class="year-group">
                <span class="year">2023</span>
                <div class="items">
                    <div class="resume-item">國科會計畫助理</div>
                    <div class="resume-item">時代科技協會網頁工讀生</div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&family=Poppins:wght@200;300;400;500;600;700;800;900&display=swap');

#resume {
    padding: 3rem 2rem;
    max-width: 900px;
    margin: 0 auto;
    color: rgba(255, 255, 255, 0.9);
    font-family: "Poppins", "Noto Sans TC", sans-serif;
}

#resume h1 {
    font-size: 3rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #fff;
    text-shadow: 0 0 10px rgba(46, 204, 224, 0.5);
    font-weight: 700;
}

.resume-section {
    margin-bottom: 3rem;
}

.resume-section h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #2ecce0;
    text-shadow: 0 0 10px rgba(46, 204, 224, 0.3);
    font-weight: 600;
    border-bottom: 2px solid rgba(46, 204, 224, 0.3);
    padding-bottom: 0.5rem;
}

.resume-item {
    display: flex;
    gap: 1.5rem;
    margin-bottom: 1rem;
    padding: 0.8rem 0;
    border-left: 2px solid transparent;
    padding-left: 1rem;
    transition: all 0.3s ease;
}

.resume-item:hover {
    border-left-color: #2ecce0;
    padding-left: 1.5rem;
    color: #2ecce0;
    text-shadow: 0 0 5px rgba(46, 204, 224, 0.5);
}

.resume-item .year {
    min-width: 100px;
    font-weight: 500;
    color: #fccf31;
    text-shadow: 0 0 5px rgba(252, 207, 49, 0.3);
}

.resume-item .content {
    flex: 1;
}

.year-group {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    align-items: flex-start;
}

.year-group .year {
    min-width: 120px;
    font-weight: 600;
    font-size: 1.1rem;
    color: #fccf31;
    text-shadow: 0 0 8px rgba(252, 207, 49, 0.4);
    padding-top: 0.5rem;
}

.year-group .items {
    flex: 1;
}

.year-group .items .resume-item {
    border-left: 2px solid transparent;
    padding-left: 1rem;
    margin-bottom: 0.6rem;
    transition: all 0.3s ease;
}

.year-group .items .resume-item:hover {
    border-left-color: #fa7c49;
    padding-left: 1.5rem;
    color: #fa7c49;
    text-shadow: 0 0 5px rgba(250, 124, 73, 0.5);
}

@media (max-width: 768px) {
    #resume {
        padding: 2rem 1rem;
    }

    #resume h1 {
        font-size: 2rem;
    }

    .resume-section h2 {
        font-size: 1.5rem;
    }

    .year-group {
        flex-direction: column;
        gap: 0.5rem;
    }

    .year-group .year {
        min-width: auto;
        padding-top: 0;
    }

    .resume-item {
        flex-direction: column;
        gap: 0.3rem;
    }
}
</style>