<template>
    <div class="fixed right-4 top-1/4 bg-white shadow-lg rounded-2xl p-6 w-64 z-50">
      <h2 class="text-xl font-bold text-gray-800 text-center">網頁觸及數</h2>
      <p class="text-5xl font-extrabold text-blue-600 text-center my-4">
        {{ viewCount }}
      </p>
      <p v-if="!loading" class="text-gray-500 text-center">截至目前為止</p>
      <p v-else class="text-gray-400 text-center">加載中...</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted } from 'vue';
  
  const viewCount = ref<number>(0);
  const loading = ref<boolean>(true);
  
  const fetchPageViews = async () => {
    try {
      const response = await fetch(
        "https://api.cloudflare.com/client/v4/zones/YOUR_ZONE_ID/analytics/dashboard",
        {
          method: "GET",
          headers: {
            Authorization: `Bearer e47b50b9c28a4cb082b4236b4bc11440`,
            "Content-Type": "application/json",
          },
        }
      );
  
      if (response.ok) {
        const data = await response.json();
        viewCount.value = data.result.totals.requests.all;
      } else {
        console.error("Failed to fetch view count:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching view count:", error);
    } finally {
      loading.value = false;
    }
  };
  
  onMounted(() => {
    fetchPageViews();
    // 每 1 分鐘更新一次數據
    setInterval(fetchPageViews, 60000);
  });
  </script>
  

  <style scoped>
  /* 固定在頁面右邊 */
  .fixed {
    position: fixed;
    top: 25%;
    right: 16px;
    z-index: 50; /* 確保它在最上層 */
  }
  
  p {
    transition: all 0.3s ease-in-out;
  }
  p:hover {
    color: #2563eb;
  }
  </style>