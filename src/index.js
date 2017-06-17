import VPhone from './Phone.vue';
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(VPhone.name, VPhone);
}
export default VPhone;
