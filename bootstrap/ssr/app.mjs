var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _api_url_main, _token, _password, _serverInit, serverInit_fn;
import _ from "lodash";
import axios from "axios";
import { createApp } from "vue/dist/vue.esm-bundler";
import { autoAnimatePlugin } from "@formkit/auto-animate/vue";
import { mergeProps, useSSRContext, defineComponent, resolveComponent, ref, createVNode, resolveDynamicComponent, onMounted, resolveDirective } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrRenderVNode, ssrGetDirectiveProps, ssrIncludeBooleanAttr, ssrLooseContain } from "vue/server-renderer";
import { createStore } from "vuex";
import route from "ziggy-js";
import { ZiggyVue } from "ziggy-js/dist/vue.js";
import VueClickAway from "vue3-click-away";
window._ = _;
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
const app = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = {};
function _sfc_ssrRender$6(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path></svg>`);
}
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/ts/shared/icons/SearchIcon.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const SearchIcon = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["ssrRender", _sfc_ssrRender$6]]);
const store = createStore({
  // @ts-ignore
  state() {
    return {
      // @ts-ignore
      // csrf: document.querySelector('meta[name="csrf-token"]').getAttribute('content'),
    };
  }
});
class Api {
  constructor() {
    __privateAdd(this, _serverInit);
    __privateAdd(this, _api_url_main, "/api/");
    __privateAdd(this, _token, store.state.csrf);
    __privateAdd(this, _password, "hunter98");
  }
  methodGetUrl(url, params = "GET", headers = { "content-type": "application/json" }, record = {}) {
    return __privateMethod(this, _serverInit, serverInit_fn).call(this, "GET", url, params, headers);
  }
  methodPostUrl(url, params = "POST", headers = { "content-type": "application/json" }, record) {
    return __privateMethod(this, _serverInit, serverInit_fn).call(this, "POST", url, params, record);
  }
  methodAnyUrl(methods, url, params, headers = { "content-type": "application/json" }, record) {
    return __privateMethod(this, _serverInit, serverInit_fn).call(this, methods, url, params, headers, record);
  }
}
_api_url_main = new WeakMap();
_token = new WeakMap();
_password = new WeakMap();
_serverInit = new WeakSet();
serverInit_fn = async function(methods = "GET", url, params = "", headers = { "content-type": "application/json" }, record = {}) {
  const { data } = await axios({
    method: methods,
    url: `${__privateGet(this, _api_url_main)}${url}?_pass=${__privateGet(this, _password)}${params}`,
    data: {
      _token: __privateGet(this, _token),
      ...record
    },
    headers: {
      ...headers
    }
  });
  return data;
};
const _sfc_main$9 = defineComponent({
  name: "search-post",
  data() {
    return {
      value: "",
      result: [],
      sort: []
    };
  },
  components: { SearchIcon },
  methods: {
    search() {
      this.result = [];
      new Api().methodGetUrl("material", ``).then((res) => {
        if (res.length > 0) {
          res.filter((item) => {
            this.result = res;
          });
        }
      });
    },
    sortBySearch(value) {
      this.sort = [];
      this.result.map((sorts) => {
        if (value === "") {
          this.sort.push(sorts);
        } else if (sorts.title.toLowerCase().includes(value.toLowerCase())) {
          this.sort.push(sorts);
        }
      });
    }
  }
});
function _sfc_ssrRender$5(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_SearchIcon = resolveComponent("SearchIcon");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex bg-white w-[550px] rounded-full items-center justify-between relative" }, _attrs))}><input type="text" name="search" maxlength="50" class="font-[IBM_Plex_Sans] border-none rounded-l-full w-full outline-none px-[15px] py-[10px]"${ssrRenderAttr("value", _ctx.value)}><button type="button" class="pr-[10px] rounded-r-full">`);
  _push(ssrRenderComponent(_component_SearchIcon, null, null, _parent));
  _push(`</button><div class="search-list absolute bottom-[-45px] rounded-full p-2 bg-white w-full"><ul><!--[-->`);
  ssrRenderList(_ctx.result, (res) => {
    _push(`<li><div class="materila"><div class="material-title">${ssrInterpolate(res.title)}</div><div class="material-descr">${ssrInterpolate(res.descr)}</div></div></li>`);
  });
  _push(`<!--]--></ul></div></div>`);
}
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/ts/modules/SearchPost/SeatchPost.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const SeatchPost = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["ssrRender", _sfc_ssrRender$5]]);
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "DropdownSelect",
  __ssrInlineRender: true,
  setup(__props) {
    ref({
      1: "ОИБ",
      2: "АДМИН"
    });
    return (_ctx, _push, _parent, _attrs) => {
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/ts/shared/UI/DropdownSelect.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const knownDomains = [
    "gmail.com",
    "bk.ru",
    "mail.ru",
    "yandex.ru",
    "list.ru",
    "inbox.ru",
    "internet.ru",
    "ya.ru",
    "yandex.by",
    "yandex.com",
    "yandex.kz"
  ];
  const [user, domain] = email.split("@");
  return emailPattern.test(email) && knownDomains.includes(domain);
};
const _sfc_main$7 = defineComponent({
  name: "AccountSetting",
  components: { DropdownSelect: _sfc_main$8 },
  data() {
    return {
      isEmailValid: void 0
    };
  },
  props: {
    users: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const user = JSON.parse(props.users);
    const surname = ref(user.surname);
    const names = ref(user.name);
    const patronymic = ref(user.patronymic !== "" ? user.patronymic : "");
    const email = ref(user.email);
    const profilePhoto = ref("");
    const onFileSelected = (event) => {
      var _a;
      const selectedFile = (_a = event.target.files) == null ? void 0 : _a[0];
      if (selectedFile) {
        const reader = new FileReader();
        reader.onload = () => {
          profilePhoto.value = reader.result;
        };
        reader.readAsDataURL(selectedFile);
      }
    };
    return {
      surname,
      names,
      patronymic,
      email,
      profilePhoto,
      onFileSelected
    };
  },
  methods: {
    async loadProfilePhoto(userId) {
      try {
        try {
          const response = await axios.get(route("avatar", userId), {
            responseType: "blob"
          });
          if (response.status === 200) {
            const imageUrl = URL.createObjectURL(response.data);
            this.profilePhoto = imageUrl;
          }
        } catch (e) {
          console.error("Не полученно");
        }
      } catch (error) {
        console.error("Не получено");
      }
    },
    isEmail() {
      this.isEmailValid = isValidEmail(this.email);
    }
  },
  mounted() {
    this.loadProfilePhoto(JSON.parse(this.users).id);
  }
});
function _sfc_ssrRender$4(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_dropdown_select = resolveComponent("dropdown-select");
  _push(`<form${ssrRenderAttrs(mergeProps({ action: "#" }, _attrs))}><div class="grid grid-cols-8 gap-2"><div class="col-span-1"><img${ssrRenderAttr("src", _ctx.profilePhoto)} alt="avatar" class="w-[115px] h-[115px] rounded-full"><input type="file" id="avatar" class="block"></div><div class="col-span-3"><label for="surname"><input id="surname" required type="text"${ssrRenderAttr("value", _ctx.surname)} placeholder="Ваша фамилия" class="border w-full px-4 py-2 rounded-md"></label></div><div class="col-span-3"><label for="name"><input id="name" required type="text"${ssrRenderAttr("value", _ctx.names)} placeholder="Ваше имя" class="border w-full px-4 py-2 rounded-md"></label></div><div class="col-span-4"><label for="patronymic"><input type="text" id="patronymic"${ssrRenderAttr("value", _ctx.patronymic)}${ssrRenderAttr("placeholder", _ctx.patronymic !== "" ? _ctx.patronymic : "Тут будет ваше отчество")} class="border w-full px-4 py-2 rounded-md"></label></div><div class="col-span-8 grid grid-cols-8 gap-2"><div class="col-span-4"><label for="email"><input id="email" type="email"${ssrRenderAttr("value", _ctx.email)} class="${ssrRenderClass([_ctx.isEmailValid === false ? "border-red-700 border-[2px]" : "", "border w-full px-4 py-2 rounded-md"])}"></label></div></div>`);
  _push(ssrRenderComponent(_component_dropdown_select, null, null, _parent));
  _push(`</div></form>`);
}
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/ts/modules/AccountSetting/AccountSetting.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const AccountSetting = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["ssrRender", _sfc_ssrRender$4]]);
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "Accordion",
  __ssrInlineRender: true,
  props: {
    text: {
      type: Object
    }
  },
  setup(__props) {
    ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "accordion" }, _attrs))}><div class="accordion-header">${ssrInterpolate(__props.text.title)}</div><div class="accordion-body">${ssrInterpolate(__props.text.body)}</div></div>`);
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/ts/shared/UI/Accordion.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = defineComponent({
  name: "CardItem",
  components: { Accordion: _sfc_main$6 }
});
function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Accordion = resolveComponent("Accordion");
  _push(ssrRenderComponent(_component_Accordion, mergeProps({ text: { title: "asfsafsafa", body: "dsfsdfhhjgdsfgsdgfkhjsgdkfgksdjgfksdgkfgskdgfkj" } }, _attrs), null, _parent));
}
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/ts/modules/CardItem/CardItem.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const CardItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["ssrRender", _sfc_ssrRender$3]]);
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProfileMenuList",
  __ssrInlineRender: true,
  props: {
    links: {
      type: Object
    }
  },
  setup(__props) {
    const styleDefault = "block";
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<ul${ssrRenderAttrs(mergeProps({
        class: __props.links.main
      }, _attrs))}><!--[-->`);
      ssrRenderList(__props.links.urls, (link, i) => {
        _push(`<li class="${ssrRenderClass([__props.links.chiles, "cursor-pointer"])}">`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(link.icon), null, null), _parent);
        if (typeof link.url !== "function") {
          _push(`<a class="${ssrRenderClass(styleDefault)}"${ssrRenderAttr("href", link.url)}>${ssrInterpolate(link.title)}</a>`);
        } else {
          _push(`<!---->`);
        }
        if (typeof link.url !== "string") {
          _push(`<a class="${ssrRenderClass([__props.links.chiles2, styleDefault])}">${ssrInterpolate(link.title)}</a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li>`);
      });
      _push(`<!--]--></ul>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/ts/modules/ProfileMenu/components/ProfileMenuList.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = defineComponent({
  name: "ProfileMenu",
  components: { ProfileMenuList: _sfc_main$4 },
  data() {
    return {
      user: {},
      show: false,
      profilePhoto: null
    };
  },
  props: {
    users: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const domainName = ref(null);
    const loginError = ref(null);
    onMounted(() => {
      domainName.value = window.location.protocol;
    });
    const logout = async () => {
      try {
        await axios.post(route("signout"));
        window.location.href = "/";
      } catch (error) {
        loginError.value = error.response.data.message;
      }
    };
    const urlss = async (link) => {
      try {
        window.location.href = link;
      } catch (error) {
        loginError.value = error.response.data.message;
      }
    };
    return { domainName, logout, urlss };
  },
  mounted() {
    this.user = JSON.parse(this.users);
    this.loadProfilePhoto(this.user.id);
  },
  methods: {
    handleClick() {
      this.show = false;
    },
    async loadProfilePhoto(userId) {
      try {
        try {
          const response = await axios.get(route("avatar", userId), {
            responseType: "blob"
          });
          if (response.status === 200) {
            const imageUrl = URL.createObjectURL(response.data);
            this.profilePhoto = imageUrl;
          }
        } catch (e) {
          console.error("Не полученно");
        }
      } catch (error) {
        console.error("Не получено");
      }
    }
  },
  beforeUnmount() {
    if (this.profilePhoto) {
      URL.revokeObjectURL(this.profilePhoto);
    }
  }
});
const ProfileMenu_vue_vue_type_style_index_0_lang = "";
function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_profile_menu_list = resolveComponent("profile-menu-list");
  const _directive_click_away = resolveDirective("click-away");
  const _directive_auto_animate = resolveDirective("auto-animate");
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "profile relative" }, _attrs))}><div><button${ssrRenderAttrs(mergeProps({ class: "profile-avatars rounded-full cursor-pointer" }, ssrGetDirectiveProps(_ctx, _directive_click_away, _ctx.handleClick)))}>`);
  if (_ctx.user.avatar === "user.png") {
    _push(`<div class="w-[45px]"><img${ssrRenderAttr("src", _ctx.profilePhoto)} alt="avatar" class="rounded-full"></div>`);
  } else {
    _push(`<div class="w-[45px]"><img src="/img/default/user.png" alt="avatar" class="rounded-full"></div>`);
  }
  _push(`</button>`);
  if (_ctx.show) {
    _push(`<div${ssrRenderAttrs(mergeProps({
      class: "profile-blocks w-[200px] absolute top-[50px] left-[-400%] shadow-2xl rounded-lg bg-white p-4 model",
      ref: "modal"
    }, ssrGetDirectiveProps(_ctx, _directive_auto_animate)))}>`);
    _push(ssrRenderComponent(_component_profile_menu_list, {
      links: {
        main: "profile-list space-y-4",
        urls: [
          {
            icon: "search-icon",
            url: _ctx.route("profile"),
            title: `${_ctx.user.surname} ${_ctx.user.name}`
          },
          {
            icon: "",
            url: "#",
            title: "Цифровая хранилка"
          },
          {
            icon: "",
            url: _ctx.route("setting"),
            title: "Настройки профиля"
          },
          {
            icon: "",
            url: "#",
            title: "Достижения на хранение"
          },
          {
            icon: "",
            url: _ctx.logout,
            title: "Выход"
          }
        ]
      }
    }, null, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/ts/modules/ProfileMenu/ProfileMenu.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const profileMenu = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$2]]);
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "uiButton",
  __ssrInlineRender: true,
  props: {
    label: {
      type: String,
      require: true
    },
    type: {
      type: String,
      default: "button",
      require: true
    },
    color: {
      type: String,
      default: "primary",
      require: false
    },
    size: {
      type: String,
      default: "md",
      require: false
    },
    rank: {
      type: String,
      require: false
    },
    rounded: {
      type: String,
      default: "rounded-cray-all"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const colorItem = ref({
      "accept": "bg-green-600",
      "danger": "bg-red-600",
      "primary": "bg-blue-600 hover:bg-blue-600/50",
      "link": "p-0 text-black",
      "secondary": "bg-[#5c636a]",
      "warning": "bg-yellow-400"
    });
    const sizeItem = ref({
      "sm": "text-[]",
      "md": "text-[14px]",
      "lg": "text-[]",
      "xl": "text-[]",
      "2xl": "text-[]"
    });
    const roundedItem = ref({
      "rounded-cray-all": "rounded",
      "rounded-cray-left": "rounded-l",
      "rounded-cray-right": "rounded-r",
      "rounded-cray-top": "rounded-t",
      "rounded-cray-bottom": "rounded-b",
      "rounded-cray-none": "rounded-none",
      "rounded-full": "rounded-full"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<button${ssrRenderAttrs(mergeProps({
        class: [
          "btn text-white px-[15px] py-[7.5px] ",
          colorItem.value[__props.color],
          sizeItem.value[__props.size],
          __props.rank,
          roundedItem.value[__props.rounded]
        ],
        type: __props.type,
        disabled: __props.disabled
      }, _attrs))}>${ssrInterpolate(__props.label)}</button>`);
    };
  }
});
const uiButton_vue_vue_type_style_index_0_lang = "";
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/ts/shared/UI/uiButton.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = defineComponent({
  name: "LoginForm",
  components: { UiButton: _sfc_main$2 },
  data() {
    return {};
  },
  setup() {
    const email = ref("");
    const password = ref("");
    const rememberMe = ref(false);
    const loginError = ref(null);
    const isFormValid = () => {
      return email.value.trim() !== "" && password.value.trim() !== "";
    };
    const handleSubmit = async () => {
      try {
        const response = await axios.post(route("loginTo"), {
          email: email.value,
          password: password.value,
          remember_me: rememberMe.value
        });
        if (response.status === 200) {
          if (response.data.authorization) {
            window.location.href = route("profile");
          } else {
            loginError.value = "Не верно введёт email или пароль";
          }
        }
      } catch (error) {
        loginError.value = error.response.data.msg;
      }
    };
    return {
      email,
      password,
      rememberMe,
      loginError,
      isFormValid,
      handleSubmit
    };
  }
});
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_ui_button = resolveComponent("ui-button");
  _push(`<form${ssrRenderAttrs(mergeProps({ class: "flex flex-col bg-gray-300 p-4 rounded-xl" }, _attrs))}><h2 class="font-[IBM_Plex_Sans] text-[32px] font-bold text-center">Вход в личный кабинет</h2><div class="grid grid-cols-3 gap-4 my-4"><label class="col-span-3 font-[IBM_Plex_Sans_Condensed]"> Email:<br><input class="w-full rounded-md px-5 py-1 font-[IBM_Plex_Sans_Condensed]" type="email"${ssrRenderAttr("value", _ctx.email)} required></label><label class="col-span-3"> Password:<br><input class="w-full rounded-md px-5 py-1 font-[IBM_Plex_Sans_Condensed]" type="password"${ssrRenderAttr("value", _ctx.password)} required></label><label><input type="checkbox" class="login-remember"${ssrIncludeBooleanAttr(Array.isArray(_ctx.rememberMe) ? ssrLooseContain(_ctx.rememberMe, null) : _ctx.rememberMe) ? " checked" : ""}> Запомнить меня </label></div>`);
  _push(ssrRenderComponent(_component_ui_button, {
    label: "Войти",
    type: "submit",
    color: "accept",
    disabled: !_ctx.isFormValid
  }, null, _parent));
  if (_ctx.loginError) {
    _push(`<div class="text-red-500 mt-2">${ssrInterpolate(_ctx.loginError)}</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</form>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/ts/modules/LoginForm/LoginForm.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const loginForm = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    xmlns: "http://www.w3.org/2000/svg",
    fill: "none",
    viewBox: "0 0 24 24",
    "stroke-width": "1.5",
    stroke: "currentColor",
    class: "w-6 h-6"
  }, _attrs))}><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"></path></svg>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/ts/shared/icons/ArrowRight.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const ArrowRight = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
document.addEventListener("DOMContentLoaded", () => {
  const loading = document.querySelector(".loader"), loader = document.getElementById("loader");
  loading.classList.remove("loading");
  loader.style.display = "none";
  const app2 = createApp({});
  app2.component(SeatchPost.name, SeatchPost);
  app2.component(CardItem.name, CardItem);
  app2.component(profileMenu.name, profileMenu);
  app2.component(AccountSetting.name, AccountSetting);
  app2.component(loginForm.name, loginForm);
  app2.component("arrowRight", ArrowRight);
  app2.use(ZiggyVue).use(VueClickAway).use(store).use(autoAnimatePlugin).mount("#app");
});
