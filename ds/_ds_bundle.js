/* @ds-bundle: {"format":4,"namespace":"MattDesignSystem_83f902","components":[{"name":"Button","sourcePath":"components/controls/Button.jsx"},{"name":"Checkbox","sourcePath":"components/controls/Checkbox.jsx"},{"name":"Radio","sourcePath":"components/controls/Radio.jsx"},{"name":"Slider","sourcePath":"components/controls/Slider.jsx"},{"name":"Switch","sourcePath":"components/controls/Switch.jsx"},{"name":"TextField","sourcePath":"components/controls/TextField.jsx"},{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"ListItem","sourcePath":"components/data/ListItem.jsx"},{"name":"TableHeader","sourcePath":"components/data/TableHeader.jsx"},{"name":"Tooltip","sourcePath":"components/data/Tooltip.jsx"},{"name":"AlertBanner","sourcePath":"components/feedback/AlertBanner.jsx"},{"name":"EmptyState","sourcePath":"components/feedback/EmptyState.jsx"},{"name":"Modal","sourcePath":"components/feedback/Modal.jsx"},{"name":"Progress","sourcePath":"components/feedback/Progress.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Breadcrumbs","sourcePath":"components/navigation/Breadcrumbs.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Stepper","sourcePath":"components/navigation/Stepper.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Icon","sourcePath":"components/surfaces/Icon.jsx"},{"name":"Surface","sourcePath":"components/surfaces/Surface.jsx"}],"sourceHashes":{"components/controls/Button.jsx":"77d175c24285","components/controls/Checkbox.jsx":"aa7c437f873c","components/controls/Radio.jsx":"cdb13996f575","components/controls/Slider.jsx":"05eb70a8cf05","components/controls/Switch.jsx":"39c7c03b0a69","components/controls/TextField.jsx":"339ab8489432","components/data/Avatar.jsx":"08e8ccbc758e","components/data/Badge.jsx":"650e613f290e","components/data/Card.jsx":"c541fe7f9028","components/data/ListItem.jsx":"2502e7b1d80a","components/data/TableHeader.jsx":"a4d9d3768189","components/data/Tooltip.jsx":"68a0e47f5236","components/feedback/AlertBanner.jsx":"26187abe8c67","components/feedback/EmptyState.jsx":"6359d8c10299","components/feedback/Modal.jsx":"b552496ce83f","components/feedback/Progress.jsx":"f698ce61607a","components/feedback/Skeleton.jsx":"16946fab0695","components/feedback/Spinner.jsx":"fb3fd2244164","components/feedback/Toast.jsx":"062aed036fcf","components/navigation/Breadcrumbs.jsx":"8507d01119c2","components/navigation/Pagination.jsx":"deea2f327f5f","components/navigation/Stepper.jsx":"32e7119a7d81","components/navigation/Tabs.jsx":"92e37cabc59e","components/surfaces/Icon.jsx":"f3ed3aef71d6","components/surfaces/Surface.jsx":"8ae0f363e743"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MattDesignSystem_83f902 = window.MattDesignSystem_83f902 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/controls/Radio.jsx
try { (() => {
function Radio({
  checked = false,
  onChange,
  label,
  name,
  value,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      flex: 'none',
      boxSizing: 'border-box',
      background: 'var(--surface-raised)',
      border: checked ? '2px solid var(--burgundy-700)' : '0',
      boxShadow: checked ? 'var(--elev-2)' : 'var(--shadow-inset)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: '50%',
      background: 'var(--burgundy-700)'
    }
  })), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Radio.jsx", error: String((e && e.message) || e) }); }

// components/controls/Slider.jsx
try { (() => {
function Slider({
  value = 50,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  showTooltip = true,
  marks,
  format = v => v + '%',
  style
}) {
  const pct = (value - min) / (max - min) * 100;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingTop: showTooltip ? 34 : 0,
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 20
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 7,
      height: 6,
      borderRadius: 3,
      background: 'var(--surface-sunken)',
      boxShadow: 'var(--shadow-inset)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 0,
      width: pct + '%',
      top: 7,
      height: 6,
      borderRadius: 3,
      background: 'var(--surface-primary)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: `calc(${pct}% - 10px)`,
      top: 0,
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--cream-50)',
      boxShadow: '2px 2px 5px rgba(70,20,22,.3), -2px -2px 4px var(--shadow-light)',
      pointerEvents: 'none'
    }
  }), showTooltip && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: pct + '%',
      bottom: 28,
      transform: 'translateX(-50%)',
      padding: '4px 8px',
      borderRadius: 6,
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      font: '600 12px/1 var(--font-sans)',
      boxShadow: 'var(--shadow-tooltip)',
      whiteSpace: 'nowrap',
      pointerEvents: 'none'
    }
  }, format(value), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      bottom: -4,
      width: 8,
      height: 8,
      background: 'var(--surface-inverse)',
      transform: 'translateX(-50%) rotate(45deg)'
    }
  })), /*#__PURE__*/React.createElement("input", {
    type: "range",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange && onChange(Number(e.target.value)),
    style: {
      position: 'absolute',
      inset: 0,
      width: '100%',
      margin: 0,
      opacity: 0,
      cursor: 'pointer'
    }
  })), marks && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 8,
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, marks.map(m => /*#__PURE__*/React.createElement("span", {
    key: m
  }, m))));
}
Object.assign(__ds_scope, { Slider });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Slider.jsx", error: String((e && e.message) || e) }); }

// components/controls/Switch.jsx
try { (() => {
function Switch({
  checked = false,
  onChange,
  showLabel = false,
  label,
  disabled,
  style
}) {
  const w = showLabel ? 64 : 52;
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      width: w,
      height: 28,
      borderRadius: 'var(--radius-pill)',
      flex: 'none',
      background: checked ? 'var(--surface-primary)' : 'var(--surface-sunken)',
      boxShadow: checked ? 'var(--shadow-primary-pressed)' : 'var(--shadow-inset)',
      transition: 'background var(--dur-base) var(--ease-soft)'
    }
  }, showLabel && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      [checked ? 'left' : 'right']: 10,
      font: '700 11px/1 var(--font-sans)',
      letterSpacing: '.04em',
      color: checked ? 'var(--cream-0)' : 'var(--text-muted)'
    }
  }, checked ? 'ON' : 'OFF'), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? w - 25 : 3,
      width: 22,
      height: 22,
      borderRadius: '50%',
      background: 'var(--cream-50)',
      boxShadow: '2px 2px 5px rgba(70,20,22,.3), -1px -1px 2px rgba(255,255,255,.6)',
      transition: 'left var(--dur-base) var(--ease-soft)'
    }
  })), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Switch.jsx", error: String((e && e.message) || e) }); }

// components/controls/TextField.jsx
try { (() => {
const {
  useState
} = React;
function TextField({
  label,
  placeholder,
  value,
  defaultValue,
  onChange,
  helper,
  error,
  disabled,
  type = 'text',
  autoFocus,
  style
}) {
  const [focus, setFocus] = useState(!!autoFocus);
  const border = error ? 'var(--border-error)' : focus ? 'var(--border-strong)' : 'var(--border-default)';
  const ring = error && focus ? '0 0 0 3px rgba(179,38,30,.15)' : focus ? 'var(--focus-ring)' : '';
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      minWidth: 0,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    defaultValue: defaultValue,
    disabled: disabled,
    autoFocus: autoFocus,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      height: 40,
      padding: '0 12px',
      borderRadius: 'var(--radius-8)',
      border: `1px solid ${border}`,
      outline: 'none',
      background: disabled ? 'var(--surface-sunken)' : 'var(--surface-base)',
      boxShadow: ['var(--shadow-field)', ring].filter(Boolean).join(','),
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      opacity: disabled ? .6 : 1,
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-base)'
    }
  }), (error || helper) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: 'var(--type-caption)',
      color: error ? 'var(--status-error)' : 'var(--text-muted)'
    }
  }, error || helper));
}
Object.assign(__ds_scope, { TextField });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/TextField.jsx", error: String((e && e.message) || e) }); }

// components/data/Avatar.jsx
try { (() => {
function Avatar({
  src,
  name = '',
  size = 40,
  ring = false,
  style
}) {
  const initials = name.split(' ').map(w => w[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", {
    title: name,
    style: {
      width: size,
      height: size,
      borderRadius: '50%',
      flex: 'none',
      display: 'inline-grid',
      placeItems: 'center',
      overflow: 'hidden',
      boxSizing: 'border-box',
      background: 'var(--taupe-400)',
      color: 'var(--burgundy-800)',
      font: `600 ${Math.round(size * .38)}px/1 var(--font-sans)`,
      border: ring ? '2px solid var(--burgundy-700)' : '2px solid var(--cream-50)',
      boxShadow: 'var(--elev-2)',
      ...style
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials);
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
const V = {
  primary: ['var(--surface-primary)', 'var(--cream-0)', 'none'],
  soft: ['var(--burgundy-100)', 'var(--burgundy-800)', 'none'],
  outline: ['transparent', 'var(--burgundy-700)', 'inset 0 0 0 1px var(--burgundy-700)'],
  success: ['var(--status-success-bg)', 'var(--status-success)', 'none'],
  warning: ['var(--status-warning-bg)', 'var(--status-warning)', 'none'],
  error: ['var(--status-error-bg)', 'var(--status-error)', 'none']
};
function Badge({
  variant = 'primary',
  children,
  style
}) {
  const [bg, fg, sh] = V[variant];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      height: 22,
      padding: '0 9px',
      borderRadius: 'var(--radius-pill)',
      background: bg,
      color: fg,
      boxShadow: sh,
      font: '600 12px/1 var(--font-sans)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/ListItem.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState
} = React;
function ListItem({
  title,
  subtitle,
  avatar,
  leading,
  trailing,
  selected,
  onClick,
  style
}) {
  const [hover, setHover] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: '8px 10px',
      borderRadius: 'var(--radius-8)',
      cursor: onClick ? 'pointer' : 'default',
      background: selected ? 'var(--surface-sunken)' : hover && onClick ? 'rgba(89,23,27,.05)' : 'transparent',
      boxShadow: selected ? 'var(--shadow-field)' : 'none',
      ...style
    }
  }, leading || avatar && /*#__PURE__*/React.createElement(__ds_scope.Avatar, _extends({
    size: 32
  }, avatar)), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      font: '600 13px/1.3 var(--font-sans)',
      color: 'var(--text-body)'
    }
  }, title), subtitle && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-caption)',
      color: 'var(--text-secondary)'
    }
  }, subtitle)), trailing);
}
Object.assign(__ds_scope, { ListItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/ListItem.jsx", error: String((e && e.message) || e) }); }

// components/data/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  content,
  children,
  placement = 'top',
  open,
  style
}) {
  const [hover, setHover] = useState(false);
  const show = open ?? hover;
  const top = placement === 'top';
  return /*#__PURE__*/React.createElement("span", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    }
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%)',
      [top ? 'bottom' : 'top']: 'calc(100% + 8px)',
      padding: '6px 10px',
      borderRadius: 6,
      background: 'var(--surface-inverse)',
      color: 'var(--text-on-inverse)',
      font: '400 12px/1.3 var(--font-sans)',
      whiteSpace: 'nowrap',
      boxShadow: 'var(--shadow-tooltip)',
      zIndex: 10,
      pointerEvents: 'none'
    }
  }, content, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: '50%',
      [top ? 'bottom' : 'top']: -4,
      width: 8,
      height: 8,
      background: 'var(--surface-inverse)',
      transform: 'translateX(-50%) rotate(45deg)'
    }
  })));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Progress.jsx
try { (() => {
function Progress({
  value = 0,
  label,
  showValue = true,
  style
}) {
  const v = Math.max(0, Math.min(100, value));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8,
      ...style
    }
  }, (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      font: 'var(--type-label)',
      letterSpacing: 'var(--tracking-label)',
      textTransform: 'uppercase',
      color: 'var(--text-body)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      textTransform: 'none'
    }
  }, Math.round(v), "%")), /*#__PURE__*/React.createElement("div", {
    role: "progressbar",
    "aria-valuenow": v,
    "aria-valuemin": 0,
    "aria-valuemax": 100,
    style: {
      height: 8,
      borderRadius: 4,
      background: 'var(--surface-sunken)',
      boxShadow: 'var(--shadow-inset)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: v + '%',
      height: '100%',
      borderRadius: 4,
      background: 'var(--surface-primary)',
      transition: 'width var(--dur-slow) var(--ease-soft)'
    }
  })));
}
Object.assign(__ds_scope, { Progress });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Progress.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function Skeleton({
  rows = 3,
  height = 10,
  gap = 14,
  widths = ['100%', '100%', '62%'],
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap,
      ...style
    }
  }, Array.from({
    length: rows
  }, (_, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      height,
      width: widths[i % widths.length],
      borderRadius: height / 2,
      background: 'linear-gradient(90deg, var(--taupe-300) 0px, var(--cream-200) 80px, var(--taupe-300) 160px) var(--taupe-300)',
      backgroundSize: '400px 100%',
      animation: 'matt-shimmer 1.4s linear infinite'
    }
  })));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function Spinner({
  size = 32,
  color = 'var(--taupe-600)',
  style
}) {
  return /*#__PURE__*/React.createElement("span", {
    role: "status",
    "aria-label": "Loading",
    style: {
      position: 'relative',
      display: 'inline-block',
      width: size,
      height: size,
      animation: 'matt-spin 1s steps(12) infinite',
      ...style
    }
  }, Array.from({
    length: 12
  }, (_, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      position: 'absolute',
      left: '50%',
      top: 0,
      width: Math.max(2, size * .09),
      height: size * .28,
      marginLeft: -Math.max(1, size * .045),
      borderRadius: 2,
      background: color,
      opacity: .15 + i / 11 * .85,
      transformOrigin: `50% ${size / 2}px`,
      transform: `rotate(${i * 30}deg)`
    }
  })));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumbs.jsx
try { (() => {
function Breadcrumbs({
  items = [],
  onNavigate,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '8px 14px',
      borderRadius: 'var(--radius-8)',
      background: 'var(--surface-raised)',
      boxShadow: 'var(--elev-2)',
      font: 'var(--type-body)',
      fontSize: 13,
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        color: 'var(--text-muted)'
      }
    }, "/"), last ? /*#__PURE__*/React.createElement("span", {
      "aria-current": "page",
      style: {
        fontWeight: 700,
        color: 'var(--text-body)'
      }
    }, it.label) : /*#__PURE__*/React.createElement("a", {
      href: it.href || '#',
      onClick: e => {
        if (onNavigate) {
          e.preventDefault();
          onNavigate(it, i);
        }
      },
      style: {
        color: 'var(--text-secondary)',
        textDecoration: 'none'
      }
    }, it.label));
  }));
}
Object.assign(__ds_scope, { Breadcrumbs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumbs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style
}) {
  const go = p => onChange && p >= 1 && p <= total && onChange(p);
  const txt = dis => ({
    border: 0,
    background: 'transparent',
    cursor: dis ? 'default' : 'pointer',
    font: '500 13px/1 var(--font-sans)',
    letterSpacing: '.04em',
    color: dis ? 'var(--text-disabled)' : 'var(--text-secondary)',
    padding: '8px 6px'
  });
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Pagination",
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("button", {
    disabled: page <= 1,
    onClick: () => go(page - 1),
    style: txt(page <= 1)
  }, "PREV"), Array.from({
    length: total
  }, (_, i) => i + 1).map(p => {
    const on = p === page;
    return /*#__PURE__*/React.createElement("button", {
      key: p,
      "aria-current": on ? 'page' : undefined,
      onClick: () => go(p),
      style: {
        width: 28,
        height: 28,
        border: 0,
        borderRadius: 'var(--radius-4)',
        cursor: 'pointer',
        font: `${on ? 700 : 500} 14px/1 var(--font-sans)`,
        background: on ? 'var(--surface-primary)' : 'transparent',
        color: on ? 'var(--cream-0)' : 'var(--text-body)',
        boxShadow: on ? 'var(--shadow-primary)' : 'none'
      }
    }, p);
  }), /*#__PURE__*/React.createElement("button", {
    disabled: page >= total,
    onClick: () => go(page + 1),
    style: txt(page >= total)
  }, "NEXT"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'inline-flex',
      padding: 4,
      gap: 2,
      borderRadius: 'var(--radius-12)',
      background: 'var(--surface-base)',
      boxShadow: 'var(--elev-2)',
      ...style
    }
  }, items.map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      onClick: () => onChange && onChange(it.id),
      style: {
        border: 0,
        cursor: 'pointer',
        padding: '8px 16px',
        borderRadius: 'var(--radius-8)',
        font: `${on ? 700 : 500} 13px/1.2 var(--font-sans)`,
        color: on ? 'var(--text-body)' : 'var(--text-secondary)',
        background: on ? 'var(--surface-raised)' : 'transparent',
        boxShadow: on ? 'inset 0 -2px 0 var(--burgundy-700)' : 'none',
        transition: 'background var(--dur-fast)'
      }
    }, it.label);
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Icon.jsx
try { (() => {
const BASE = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  style,
  title
}) {
  const src = (window.__ICON_URLS && window.__ICON_URLS[name]) || `${BASE}${name}.svg`;
  const url = `url("${src}") center / contain no-repeat`;
  return /*#__PURE__*/React.createElement("span", {
    role: title ? 'img' : undefined,
    "aria-label": title,
    "aria-hidden": title ? undefined : true,
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      background: color,
      WebkitMask: url,
      mask: url,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Icon.jsx", error: String((e && e.message) || e) }); }

// components/controls/Button.jsx
try { (() => {
const {
  useState
} = React;
const SIZES = {
  sm: [32, 14, 13],
  md: [40, 20, 14],
  lg: [48, 26, 16]
};
function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled = false,
  icon,
  iconRight,
  fullWidth,
  children,
  onClick,
  type = 'button',
  style
}) {
  const [hover, setHover] = useState(false);
  const [down, setDown] = useState(false);
  const [h, px, fs] = SIZES[size];
  const off = disabled;
  const active = (down || loading) && !off;
  let s;
  if (off) s = {
    background: 'var(--surface-disabled)',
    color: 'var(--cream-0)',
    boxShadow: 'none'
  };else if (variant === 'primary') s = {
    background: active ? 'var(--surface-primary-pressed)' : hover ? 'var(--surface-primary-hover)' : 'var(--surface-primary)',
    color: 'var(--text-on-primary)',
    boxShadow: active ? 'var(--shadow-primary-pressed)' : 'var(--shadow-primary)'
  };else if (variant === 'secondary') s = {
    background: 'var(--surface-raised)',
    color: 'var(--burgundy-700)',
    boxShadow: active ? 'var(--shadow-inset)' : hover ? 'var(--elev-3)' : 'var(--elev-2)'
  };else s = {
    background: active ? 'var(--surface-sunken)' : hover ? 'rgba(89,23,27,.07)' : 'transparent',
    color: 'var(--burgundy-700)',
    boxShadow: 'none'
  };
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: off,
    "aria-busy": loading || undefined,
    onClick: off || loading ? undefined : onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => {
      setHover(false);
      setDown(false);
    },
    onMouseDown: () => setDown(true),
    onMouseUp: () => setDown(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: h,
      padding: `0 ${px}px`,
      width: fullWidth ? '100%' : undefined,
      border: 0,
      borderRadius: 'var(--radius-pill)',
      font: `600 ${fs}px/1 var(--font-sans)`,
      cursor: off ? 'not-allowed' : loading ? 'progress' : 'pointer',
      transition: 'background var(--dur-fast) var(--ease-soft), box-shadow var(--dur-base) var(--ease-soft)',
      whiteSpace: 'nowrap',
      ...s,
      ...style
    }
  }, loading ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 14,
      height: 14,
      borderRadius: '50%',
      border: '2px solid currentColor',
      borderRightColor: 'transparent',
      opacity: .85,
      animation: 'matt-spin .8s linear infinite'
    }
  }) : icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'lg' ? 20 : 16
  }), children, iconRight && !loading && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: size === 'lg' ? 20 : 16
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Button.jsx", error: String((e && e.message) || e) }); }

// components/controls/Checkbox.jsx
try { (() => {
function Checkbox({
  checked = false,
  onChange,
  label,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? .5 : 1,
      font: 'var(--type-body)',
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      borderRadius: 'var(--radius-4)',
      display: 'grid',
      placeItems: 'center',
      flex: 'none',
      background: checked ? 'var(--surface-primary)' : 'var(--surface-base)',
      boxShadow: checked ? 'var(--shadow-primary)' : 'var(--shadow-inset)',
      transition: 'background var(--dur-fast) var(--ease-soft)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "var(--cream-0)"
  })), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/controls/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function Card({
  icon,
  title,
  description,
  action,
  children,
  padding = 18,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding,
      borderRadius: 'var(--radius-16)',
      background: 'var(--surface-raised)',
      boxShadow: 'var(--shadow-raised)',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 20,
    color: "var(--burgundy-700)",
    style: {
      marginBottom: 8
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-body)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, description), children, action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 12
    }
  }, action));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/TableHeader.jsx
try { (() => {
function TableHeader({
  columns = [],
  onSort,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "row",
    style: {
      display: 'grid',
      gridTemplateColumns: columns.map(c => c.width || '1fr').join(' '),
      alignItems: 'center',
      height: 40,
      borderRadius: 'var(--radius-8)',
      background: 'var(--surface-raised)',
      boxShadow: 'var(--elev-2)',
      overflow: 'hidden',
      ...style
    }
  }, columns.map((c, i) => /*#__PURE__*/React.createElement("div", {
    role: "columnheader",
    key: i,
    onClick: () => c.sortable && onSort && onSort(i),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4,
      height: '100%',
      padding: '0 12px',
      cursor: c.sortable ? 'pointer' : 'default',
      font: `${c.sorted ? 700 : 600} 13px/1 var(--font-sans)`,
      color: 'var(--text-body)',
      borderLeft: i ? '1px solid var(--border-subtle)' : 0
    }
  }, c.label, c.sorted && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: c.sorted === 'asc' ? 'chevron-up' : 'chevron-down',
    size: 16
  }))));
}
Object.assign(__ds_scope, { TableHeader });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/TableHeader.jsx", error: String((e && e.message) || e) }); }

// components/feedback/AlertBanner.jsx
try { (() => {
const V = {
  info: ['var(--surface-primary)', 'var(--cream-0)', 'circle-alert', 'var(--burgundy-100)', 'var(--burgundy-800)'],
  success: ['var(--olive-700)', 'var(--cream-0)', 'circle-check', 'var(--status-success-bg)', 'var(--status-success)'],
  warning: ['var(--amber-700)', 'var(--cream-0)', 'triangle-alert', 'var(--status-warning-bg)', 'var(--status-warning)'],
  error: ['var(--red-600)', 'var(--cream-0)', 'circle-x', 'var(--status-error-bg)', 'var(--status-error)']
};
function AlertBanner({
  variant = 'info',
  tone = 'solid',
  title,
  children,
  style
}) {
  const [sbg, sfg, ic, tbg, tfg] = V[variant];
  const solid = tone === 'solid';
  return /*#__PURE__*/React.createElement("div", {
    role: "alert",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 10,
      padding: '10px 14px',
      borderRadius: 'var(--radius-8)',
      background: solid ? sbg : tbg,
      color: solid ? sfg : tfg,
      boxShadow: solid ? '3px 3px 8px rgba(89,23,27,.25), -2px -2px 6px var(--shadow-light)' : 'var(--elev-1)',
      font: 'var(--type-body)',
      fontSize: 13,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 20,
    style: {
      marginTop: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      lineHeight: 1.45
    }
  }, title && /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, title, ": "), children));
}
Object.assign(__ds_scope, { AlertBanner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/AlertBanner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/EmptyState.jsx
try { (() => {
function EmptyState({
  icon = 'search-x',
  title,
  description,
  action,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 10,
      padding: '32px 24px',
      textAlign: 'center',
      borderRadius: 'var(--radius-16)',
      border: '1.5px dashed var(--taupe-500)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 64,
    color: "var(--taupe-600)",
    style: {
      marginBottom: 8
    }
  }), title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-body)'
    }
  }, title), description && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      maxWidth: 260
    }
  }, description), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 6
    }
  }, action));
}
Object.assign(__ds_scope, { EmptyState });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/EmptyState.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Modal.jsx
try { (() => {
function Modal({
  open = true,
  inline = false,
  title,
  icon = 'triangle-alert',
  children,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  onCancel,
  width = 320,
  style
}) {
  if (!open) return null;
  const box = /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": !inline,
    style: {
      width,
      maxWidth: '100%',
      boxSizing: 'border-box',
      padding: 24,
      borderRadius: 'var(--radius-16)',
      background: 'var(--surface-raised)',
      boxShadow: 'var(--elev-5)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 12,
      textAlign: 'center',
      ...style
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-h3)',
      color: 'var(--text-body)'
    }
  }, title), icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 56,
    color: "var(--taupe-600)",
    style: {
      margin: '4px 0'
    }
  }), children && /*#__PURE__*/React.createElement("div", {
    style: {
      font: 'var(--type-body)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, children), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      width: '100%',
      marginTop: 4
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "secondary",
    size: "sm",
    fullWidth: true,
    onClick: onCancel
  }, cancelLabel), /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    fullWidth: true,
    onClick: onConfirm
  }, confirmLabel)));
  if (inline) return box;
  return /*#__PURE__*/React.createElement("div", {
    onClick: e => e.target === e.currentTarget && onCancel && onCancel(),
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'grid',
      placeItems: 'center',
      background: 'rgba(46,18,20,.28)',
      backdropFilter: 'blur(3px)'
    }
  }, box);
}
Object.assign(__ds_scope, { Modal });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Modal.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const IC = {
  success: ['check', 'var(--status-success)'],
  info: ['info', 'var(--burgundy-700)'],
  warning: ['triangle-alert', 'var(--status-warning)'],
  error: ['circle-x', 'var(--status-error)']
};
function Toast({
  variant = 'info',
  title,
  message,
  showIcon = true,
  onDismiss,
  style
}) {
  const [ic, col] = IC[variant];
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minWidth: 220,
      padding: '12px 14px',
      borderRadius: 'var(--radius-8)',
      background: 'var(--surface-raised)',
      boxShadow: 'var(--elev-3)',
      font: 'var(--type-body)',
      fontSize: 13,
      color: 'var(--text-body)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("b", {
    style: {
      fontWeight: 700
    }
  }, title, ": "), message), showIcon && variant !== 'info' && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: ic,
    size: 16,
    color: col
  }), onDismiss && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onDismiss,
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Stepper.jsx
try { (() => {
function Stepper({
  steps = [],
  current = 0,
  currentHint,
  onStepClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      paddingTop: currentHint ? 52 : 0,
      ...style
    }
  }, steps.map((s, i) => {
    const done = i < current,
      on = i === current;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, i > 0 && /*#__PURE__*/React.createElement("div", {
      style: {
        flex: 1,
        height: 2,
        marginTop: 16,
        background: i <= current ? 'var(--burgundy-700)' : 'var(--taupe-400)'
      }
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
        width: 32
      }
    }, on && currentHint && /*#__PURE__*/React.createElement("div", {
      style: {
        position: 'absolute',
        bottom: '100%',
        marginBottom: 10,
        padding: '6px 10px',
        borderRadius: 6,
        background: 'var(--surface-inverse)',
        color: 'var(--text-on-inverse)',
        font: '400 11px/1.3 var(--font-sans)',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        boxShadow: 'var(--shadow-tooltip)'
      }
    }, currentHint, /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: '50%',
        bottom: -4,
        width: 8,
        height: 8,
        background: 'var(--surface-inverse)',
        transform: 'translateX(-50%) rotate(45deg)'
      }
    })), /*#__PURE__*/React.createElement("button", {
      onClick: () => onStepClick && onStepClick(i),
      style: {
        width: 32,
        height: 32,
        borderRadius: '50%',
        boxSizing: 'border-box',
        display: 'grid',
        placeItems: 'center',
        cursor: onStepClick ? 'pointer' : 'default',
        font: '600 14px/1 var(--font-sans)',
        border: on ? 0 : `2px solid ${done ? 'var(--burgundy-700)' : 'var(--taupe-400)'}`,
        background: on ? 'var(--surface-primary)' : 'var(--surface-raised)',
        color: on ? 'var(--cream-0)' : done ? 'var(--burgundy-700)' : 'var(--text-secondary)',
        boxShadow: on ? 'var(--shadow-primary)' : 'var(--elev-2)'
      }
    }, done ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: "check",
      size: 16
    }) : i + 1), /*#__PURE__*/React.createElement("span", {
      style: {
        font: `${on ? 700 : 400} 12px/1.3 var(--font-sans)`,
        color: on ? 'var(--text-body)' : 'var(--text-secondary)',
        whiteSpace: 'nowrap'
      }
    }, i + 1, ". ", s.label)));
  }));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/surfaces/Surface.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SH = {
  base: 'none',
  raised: 'var(--shadow-raised)',
  inset: 'var(--shadow-inset)',
  pressed: 'var(--shadow-pressed)'
};
function Surface({
  variant = 'raised',
  elevation,
  radius = 16,
  padding = 18,
  as: Tag = 'div',
  style,
  children,
  ...rest
}) {
  const shadow = elevation ? `var(--elev-${elevation})` : SH[variant];
  const bg = variant === 'pressed' ? 'var(--surface-sunken)' : variant === 'raised' ? 'var(--surface-raised)' : 'var(--surface-base)';
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    style: {
      background: bg,
      borderRadius: radius,
      padding,
      boxShadow: shadow,
      ...style
    }
  }), children);
}
Object.assign(__ds_scope, { Surface });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surfaces/Surface.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Slider = __ds_scope.Slider;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.TextField = __ds_scope.TextField;

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.ListItem = __ds_scope.ListItem;

__ds_ns.TableHeader = __ds_scope.TableHeader;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.AlertBanner = __ds_scope.AlertBanner;

__ds_ns.EmptyState = __ds_scope.EmptyState;

__ds_ns.Modal = __ds_scope.Modal;

__ds_ns.Progress = __ds_scope.Progress;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Breadcrumbs = __ds_scope.Breadcrumbs;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.Surface = __ds_scope.Surface;

})();
