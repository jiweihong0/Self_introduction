<template>
    <div id="resume">
        <h1>簡歷</h1>

        <!-- 學歷 -->
        <section class="resume-section">
            <h2>學歷</h2>
            <div class="resume-item">
                <span class="year">2024 - now</span>
                <span class="content">國立臺北科技大學 資訊與財金管理系（碩士）</span>
            </div>
            <div class="resume-item">
                <span class="year">2020 - 2024</span>
                <span class="content">國立高雄科技大學 智慧商務系（學士）</span>
            </div>
            <div class="resume-item">
                <span class="year">2017 - 2020</span>
                <span class="content">台中高工 資訊科（高職）</span>
            </div>
        </section>

        <!-- 工作經驗 -->
        <section class="resume-section">
            <h2>工作經驗</h2>
            <div class="year-group">
                <span class="year">2025</span>
                <div class="items">
                    <div class="resume-item">blackwired 實習生</div>
                </div>
            </div>
            <div class="year-group">
                <span class="year">2024</span>
                <div class="items">
                    <div class="resume-item">華鉬人資專員</div>
                    <div class="resume-item">金融資通安全研究室 FC$LAB</div>
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

        <!-- 經歷 - 雙視圖 -->
        <section class="resume-section">
            <div class="section-header">
                <h2>經歷</h2>
                <div class="view-toggle">
                    <button :class="['toggle-btn', viewMode === 'time' ? 'active' : '']" @click="viewMode = 'time'">
                        🕐 時間軸
                    </button>
                    <button :class="['toggle-btn', viewMode === 'category' ? 'active' : '']"
                        @click="viewMode = 'category'">
                        🗂️ 類別
                    </button>
                </div>
            </div>

            <!-- 時間軸視圖 -->
            <div v-if="viewMode === 'time'" class="time-view">
                <div v-for="group in timeGroups" :key="group.year" class="year-group">
                    <span class="year">{{ group.year }}</span>
                    <div class="items">
                        <div v-for="item in group.items" :key="item.text" class="resume-item">
                            <span class="category-tag" :class="item.categoryClass">{{ item.categoryLabel }}</span>
                            <span>{{ item.text }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 類別視圖 -->
            <div v-if="viewMode === 'category'" class="category-view">
                <div v-for="cat in categoryGroups" :key="cat.name" class="cat-group">
                    <div class="cat-header">
                        <span class="cat-icon">{{ cat.icon }}</span>
                        <span class="cat-name">{{ cat.name }}</span>
                    </div>
                    <div class="cat-items">
                        <div v-for="item in cat.items" :key="item.text" class="resume-item">
                            <span class="year-badge">{{ item.year }}</span>
                            <span>{{ item.text }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const viewMode = ref('time')

const timeGroups = [
    {
        year: '2026',
        items: [
            { text: 'EC-Council CTIA', categoryLabel: '證照', categoryClass: 'tag-cert' },
        ]
    },
    {
        year: '2025',
        items: [
            { text: 'IEEE GCCE 論文 accept 鐵道轉轍器', categoryLabel: '論文', categoryClass: 'tag-paper' },
            { text: 'IWAIT accept 遊戲惡意退款系統', categoryLabel: '論文', categoryClass: 'tag-paper' },
            { text: '資服競賽 隱私強化組 第3名', categoryLabel: '競賽', categoryClass: 'tag-award' },
            { text: '台灣好厲害入圍', categoryLabel: '競賽', categoryClass: 'tag-award' },
            { text: '信託業務金融證照', categoryLabel: '證照', categoryClass: 'tag-cert' },
            { text: 'ISO 42001 Lead Auditor', categoryLabel: '證照', categoryClass: 'tag-cert' },
            { text: '學海築夢', categoryLabel: '活動', categoryClass: 'tag-activity' },
            { text: '南區技能分區競賽助理', categoryLabel: '活動', categoryClass: 'tag-activity' },
            { text: '網路與系統安全助教', categoryLabel: '活動', categoryClass: 'tag-activity' },
        ]
    },
    {
        year: '2024',
        items: [
            { text: 'AIS3 最佳專題（跨領域）', categoryLabel: '論文', categoryClass: 'tag-paper' },
            { text: 'Azure AI 900', categoryLabel: '證照', categoryClass: 'tag-cert' },
            { text: 'ISO 15408', categoryLabel: '證照', categoryClass: 'tag-cert' },
            { text: 'IPAS 資安初級', categoryLabel: '證照', categoryClass: 'tag-cert' },
            { text: 'AIS3 暑期課程學員', categoryLabel: '活動', categoryClass: 'tag-activity' },
            { text: 'HITCON 會眾', categoryLabel: '活動', categoryClass: 'tag-activity' },
            { text: 'Google 資安人員培育計畫（結訓）', categoryLabel: '活動', categoryClass: 'tag-activity' },
            { text: 'PADI 潛水初級', categoryLabel: '活動', categoryClass: 'tag-activity' },
        ]
    },
    {
        year: '2023',
        items: [
            { text: '國科會計劃', categoryLabel: '論文', categoryClass: 'tag-paper' },
            { text: '成大資管研討會 優勝', categoryLabel: '競賽', categoryClass: 'tag-award' },
            { text: '高科杯 佳作（理想機器人 Line Bot）', categoryLabel: '競賽', categoryClass: 'tag-award' },
            { text: '資服競賽入圍', categoryLabel: '競賽', categoryClass: 'tag-award' },
        ]
    },
    {
        year: '2022',
        items: [
            { text: '金融科技力證照', categoryLabel: '證照', categoryClass: 'tag-cert' },
        ]
    },
    {
        year: 'before 2021',
        items: [
            { text: '電腦硬體裝修丙級', categoryLabel: '證照', categoryClass: 'tag-cert' },
            { text: '電腦軟體應用乙級', categoryLabel: '證照', categoryClass: 'tag-cert' },
        ]
    },
]

const categoryGroups = [
    {
        icon: '📄',
        name: '論文 & 研究',
        items: [
            { year: '2025', text: 'IEEE GCCE 論文 accept 鐵道轉轍器' },
            { year: '2025', text: 'IWAIT accept 遊戲惡意退款系統' },
            { year: '2024', text: 'AIS3 最佳專題（跨領域）' },
            { year: '2023', text: '成大資管研討會 優勝' },
            { year: '2023', text: '國科會計劃' },
        ]
    },
    {
        icon: '🏆',
        name: '競賽 & 入圍',
        items: [
            { year: '2025', text: '資服競賽 隱私強化組 第3名' },
            { year: '2025', text: '台灣好厲害入圍' },
            { year: '2023', text: '高科杯 佳作（理想機器人 Line Bot）' },
            { year: '2023', text: '資服競賽入圍' },
        ]
    },
    {
        icon: '📜',
        name: '證照 & 認證',
        items: [
            { year: '2025', text: '信託業務金融證照' },
            { year: '2026', text: 'EC-Council CTIA' },
            { year: '2025', text: 'ISO 42001 Lead Auditor' },
            { year: '2024', text: 'Azure AI 900' },
            { year: '2024', text: 'ISO 15408' },
            { year: '2024', text: 'IPAS 資安初級' },
            { year: '2022', text: '金融科技力證照' },
            { year: '2021↑', text: '電腦軟體應用乙級' },
            { year: '2021↑', text: '電腦硬體裝修丙級' },
        ]
    },
    {
        icon: '🌐',
        name: '活動 & 課程',
        items: [
            { year: '2025', text: '學海築夢' },
            { year: '2025', text: '南區技能分區競賽助理' },
            { year: '2025', text: '網路與系統安全助教' },
            { year: '2024', text: 'Google 資安人員培育計畫（結訓）' },
            { year: '2024', text: 'AIS3 暑期課程學員' },
            { year: '2024', text: 'HITCON 會眾' },
            { year: '2024', text: 'PADI 潛水初級' },
        ]
    },
]
</script>

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

/* ── Section Header with Toggle ── */
.section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid rgba(46, 204, 224, 0.3);
    padding-bottom: 0.5rem;
}

.section-header h2 {
    margin: 0;
    border: none;
    padding: 0;
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

/* ── Toggle Buttons ── */
.view-toggle {
    display: flex;
    gap: 0.5rem;
}

.toggle-btn {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(46, 204, 224, 0.3);
    color: rgba(255, 255, 255, 0.6);
    padding: 0.3rem 0.9rem;
    border-radius: 20px;
    cursor: pointer;
    font-size: 0.8rem;
    font-family: "Poppins", "Noto Sans TC", sans-serif;
    transition: all 0.25s ease;
}

.toggle-btn:hover {
    background: rgba(46, 204, 224, 0.1);
    color: #2ecce0;
    border-color: #2ecce0;
}

.toggle-btn.active {
    background: rgba(46, 204, 224, 0.2);
    border-color: #2ecce0;
    color: #2ecce0;
    box-shadow: 0 0 8px rgba(46, 204, 224, 0.3);
}

/* ── Shared resume-item ── */
.resume-item {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    padding: 0.55rem 0.8rem;
    border-left: 2px solid transparent;
    transition: all 0.3s ease;
    border-radius: 0 4px 4px 0;
}

.resume-item:hover {
    border-left-color: #2ecce0;
    padding-left: 1.3rem;
    color: #2ecce0;
    background: rgba(46, 204, 224, 0.05);
    text-shadow: 0 0 5px rgba(46, 204, 224, 0.4);
}

/* 學歷 items (year + content) */
.resume-item .year {
    min-width: 110px;
    font-weight: 500;
    color: #fccf31;
    text-shadow: 0 0 5px rgba(252, 207, 49, 0.3);
}

.resume-item .content {
    flex: 1;
}

/* ── Time View ── */
.year-group {
    display: flex;
    gap: 2rem;
    margin-bottom: 2rem;
    align-items: flex-start;
}

.year-group .year {
    min-width: 110px;
    font-weight: 600;
    font-size: 1.05rem;
    color: #fccf31;
    text-shadow: 0 0 8px rgba(252, 207, 49, 0.4);
    padding-top: 0.5rem;
    flex-shrink: 0;
}

.year-group .items {
    flex: 1;
}

.year-group .items .resume-item:hover {
    border-left-color: #fa7c49;
    color: #fa7c49;
    background: rgba(250, 124, 73, 0.05);
    text-shadow: 0 0 5px rgba(250, 124, 73, 0.5);
}

/* Category Tags (time view) */
.category-tag {
    font-size: 0.68rem;
    padding: 0.15rem 0.5rem;
    border-radius: 10px;
    font-weight: 600;
    flex-shrink: 0;
    letter-spacing: 0.02em;
}

.tag-paper {
    background: rgba(100, 180, 255, 0.2);
    color: #64b4ff;
    border: 1px solid rgba(100, 180, 255, 0.4);
}

.tag-award {
    background: rgba(255, 200, 80, 0.2);
    color: #fcc84a;
    border: 1px solid rgba(255, 200, 80, 0.4);
}

.tag-cert {
    background: rgba(80, 220, 160, 0.2);
    color: #50dca0;
    border: 1px solid rgba(80, 220, 160, 0.4);
}

.tag-activity {
    background: rgba(200, 130, 255, 0.2);
    color: #c882ff;
    border: 1px solid rgba(200, 130, 255, 0.4);
}

/* ── Category View ── */
.category-view {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
}

.cat-group {
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 12px;
    padding: 1.2rem;
    transition: border-color 0.3s ease;
}

.cat-group:hover {
    border-color: rgba(46, 204, 224, 0.3);
}

.cat-header {
    display: flex;
    align-items: center;
    gap: 0.6rem;
    margin-bottom: 1rem;
    padding-bottom: 0.6rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.cat-icon {
    font-size: 1.3rem;
}

.cat-name {
    font-size: 1.05rem;
    font-weight: 600;
    color: #2ecce0;
}

/* Year badge (category view) */
.year-badge {
    font-size: 0.72rem;
    padding: 0.1rem 0.5rem;
    border-radius: 8px;
    background: rgba(252, 207, 49, 0.15);
    color: #fccf31;
    border: 1px solid rgba(252, 207, 49, 0.3);
    flex-shrink: 0;
    min-width: 52px;
    text-align: center;
    font-weight: 500;
}

/* ── Responsive ── */
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

    .section-header {
        flex-direction: column;
        align-items: flex-start;
        gap: 0.8rem;
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
        flex-direction: row;
        flex-wrap: wrap;
        gap: 0.4rem;
    }

    .category-view {
        grid-template-columns: 1fr;
    }
}
</style>
