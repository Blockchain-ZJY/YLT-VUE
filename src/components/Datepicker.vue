<template>
  <div class="relative bg-white ">
    <flat-pickr class="form-input pl-9 bg-white rounded-lg drop-shadow-lg dark:bg-slate-800 text-black hover:text-slate-600 dark:text-black dark:hover:text-black font-medium w-[15.5rem]" :config="config" v-model="date"></flat-pickr>
    <div class="absolute inset-0 right-auto flex items-center pointer-events-none">
      <svg class="w-4 h-4 fill-current text-slate-500 dark:text-slate-400 ml-3" viewBox="0 0 16 16">
        <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
      </svg>
    </div>    
  </div>
</template>

<script>
import flatPickr from 'vue-flatpickr-component'

export default {
  name: 'Datepicker',
  props: ['align'],
    data (props) {
      return {
        date: null, // refer to https://github.com/ankurk91/vue-flatpickr-component
        config: {
          mode: 'range',
          static: true,
          monthSelectorType: 'static',
          dateFormat: 'M j, Y',
          defaultDate: [new Date().setDate(new Date().getDate() - 6), new Date()],
          prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
          nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
          onReady: (selectedDates, dateStr, instance) => {
            instance.element.value = dateStr.replace('to', '-');
            const customClass = (props.align) ? props.align : '';
            instance.calendarContainer.classList.add(`flatpickr-${customClass}`);            
          },
          onChange: (selectedDates, dateStr, instance) => { 
            instance.element.value = dateStr.replace('to', '-');
          },
        },
      }
    },  
  components: {
    flatPickr
  },
}
</script>