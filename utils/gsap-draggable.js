import gsap from "gsap";

export const setCenter = (target, actionTarget) => {
  gsap.to(target, {
    x: actionTarget.offsetLeft - target.offsetLeft,
    y: actionTarget.offsetTop - target.offsetTop,
    ease: "sine",
  });
};

export const reset = (el) => {
  let tl = gsap.timeline({ delay: 0 });
  tl.fromTo(
    el,
    {
      left: el.offsetLeft - 10,
    },
    {
      left: el.offsetLeft + 10,
      yoyo: true,
      repeat: 3,
      duration: 0.15,
      ease: "sine.inOut",
    }
  ).to(el, {
    duration: 0.7,
    x: 0,
    y: 0,
    scale: 1,
    ease: "sine",
  });
};

export const playIncorrectSeq = (el, callbackFn, params) => {
  let tl = gsap.timeline({ delay: 0 });
  tl.to(el, { scale: 0.8 })
    .fromTo(
      el,
      {
        left: el.offsetLeft - 20,
      },
      {
        left: el.offsetLeft,
        yoyo: true,
        repeat: 5,
        duration: 0.15,
        ease: "sine.inOut",
      }
    )
    .to(el, {
      opacity: 0,
      duration: 0.5,
      onComplete: callbackFn || null,
      onCompleteParams: [params] || [],
    });
};

export const playCorrectSeq = (el, callbackFn, params) => {
  let tl = gsap.timeline({ delay: 0 });
  tl.fromTo(
    el,
    {
      scale: 1,
    },
    {
      scale: 0.8,
      yoyo: true,
      duration: 0.5,
      ease: "sine.inOut",
    }
  )
    .to(el, {
      duration: 0.5,
      scale: 0.9,
      ease: "sine.out",
    })
    .to(el, {
      opacity: 0,
      duration: 0.5,
      onComplete: callbackFn || null,
      onCompleteParams: [params] || [],
    });
};
