'use client'
import { useEffect } from 'react';

export const Charities = () => {
  const widgets = [
    {
      id: "jg-widget-play2helpworldwateraid-257",
      src: "://widgets.justgiving.com/fundraisingpage/play2helpworldwateraid?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwd29ybGR3YXRlcmFpZC0yNTcmdz00MDAmYj1pbWFnZSxkb25hdGUmaWI9dGl0bGUsc3VtbWFyeSxwcm9ncmVzcyxyYWlzZWQsdGFyZ2V0"
    },
    {
      id: "jg-widget-play2helpworldwwf-988",
      src: "://widgets.justgiving.com/fundraisingpage/play2helpworldwwf?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwd29ybGR3d2YtOTg4Jnc9NDAwJmI9aW1hZ2UsZG9uYXRlJmliPXN1bW1hcnkscHJvZ3Jlc3MscmFpc2VkLHRhcmdldA%3D%3D"
    },
    {
      id: "jg-widget-play2helpworldmsfdocswithoutborders-928",
      src: "://widgets.justgiving.com/fundraisingpage/play2helpworldmsfdocswithoutborders?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwd29ybGRtc2Zkb2Nzd2l0aG91dGJvcmRlcnMtOTI4Jnc9NDAwJmI9aW1hZ2UsZG9uYXRlJmliPXRpdGxlLHN1bW1hcnkscHJvZ3Jlc3MscmFpc2VkLHRhcmdldA%3D%3D"
    },
    {
      id: "jg-widget-play2helpoxfam-646",
      src: "://widgets.justgiving.com/fundraisingpage/play2helpoxfam?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwb3hmYW0tNjQ2Jnc9NDAwJmI9aW1hZ2UsZG9uYXRlJmliPXN1bW1hcnkscHJvZ3Jlc3MscmFpc2VkLHRhcmdldA%3D%3D"
    },
    {
      id: "jg-widget-play2helpunicef-675",
      src: "://widgets.justgiving.com/fundraisingpage/play2helpunicef?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwdW5pY2VmLTY3NSZ3PTQwMCZiPWltYWdlLGRvbmF0ZSZpYj1zdW1tYXJ5LHByb2dyZXNzLHJhaXNlZCx0YXJnZXQ%3D"
    },
    {
      id: "jg-widget-play2helpcancerresearch-421",
      src: "://widgets.justgiving.com/fundraisingpage/play2helpcancerresearch?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwY2FuY2VycmVzZWFyY2gtNDIxJnc9NDAwJmI9aW1hZ2UsZG9uYXRlJmliPXRpdGxlLHByb2dyZXNzLHJhaXNlZCx0YXJnZXQ%3D"
    },
    {
      id: "jg-widget-play2helpkiva-871",
      src: "://widgets.justgiving.com/fundraisingpage/play2helpkiva?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwa2l2YS04NzEmdz00MDAmYj1pbWFnZSxkb25hdGUmaWI9dGl0bGUscHJvZ3Jlc3MscmFpc2VkLHRhcmdldA%3D%3D"
    },
    {
      id: "jg-widget-play2helpalzheimerssociety-677",
      src: "://widgets.justgiving.com/fundraisingpage/play2helpalzheimerssociety?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwYWx6aGVpbWVyc3NvY2lldHktNjc3Jnc9NDAwJmI9aW1hZ2UsZG9uYXRlJmliPXRpdGxlLHByb2dyZXNzLHJhaXNlZCx0YXJnZXQ%3D"
    },
    {
      id: "jg-widget-play2helpredcross-20",
      src: "://widgets.justgiving.com/fundraisingpage/play2helpredcross?enc=ZT1qZy13aWRnZXQtcGxheTJoZWxwcmVkY3Jvc3MtMjAmdz00MDAmYj1pbWFnZSxkb25hdGUmaWI9dGl0bGUscHJvZ3Jlc3MscmFpc2VkLHRhcmdldA%3D%3D"
    }
  ];

  useEffect(() => {
    widgets.forEach(widget => {
      const { id, src } = widget;
      const pfx = window.location.protocol === "https:" ? "https" : "http";
      const el = document.getElementById(id);
      if (el) {
        const script = document.createElement("script");
        script.src = pfx + src;
        el.appendChild(script);
      }
    });
  }, []);

  return (
    <div className="container mx-auto px-4 my-8">
      <h1 className="text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        Time to MAKE THE DIFFERENCE!
      </h1>
      <p className="text-center text-sm md:text-base lg:text-lg mb-6">
        Help our charity partners by sharing, playing our fun free games, and/or donating directly ❤️
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {widgets.map((widget) => (
          <div key={widget.id} className="flex justify-center">
            <div id={widget.id} className="w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

