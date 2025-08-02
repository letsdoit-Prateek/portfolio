// Common tracking events for the portfolio
import { trackEvent, trackButtonClick, trackOutboundClick } from '@/components/GoogleAnalytics';

// Portfolio specific tracking functions
export const trackProjectView = (projectName: string) => {
  trackEvent('project_view', {
    project_name: projectName,
    timestamp: new Date().toISOString(),
  });
};

export const trackSkillsView = () => {
  trackEvent('skills_section_view', {
    timestamp: new Date().toISOString(),
  });
};

export const trackContactAttempt = (method: 'email' | 'linkedin' | 'github' | 'other', details?: string) => {
  trackEvent('contact_attempt', {
    contact_method: method,
    details: details,
    timestamp: new Date().toISOString(),
  });
};

export const trackSocialClick = (platform: string, url: string) => {
  trackButtonClick(`${platform}_click`, 'Social Links');
  trackOutboundClick(url, platform);
};

export const trackThemeChange = (theme: 'light' | 'dark') => {
  trackEvent('theme_change', {
    theme: theme,
    timestamp: new Date().toISOString(),
  });
};

export const trackScrollToSection = (sectionName: string) => {
  trackEvent('section_scroll', {
    section_name: sectionName,
    timestamp: new Date().toISOString(),
  });
};

export const trackModalOpen = (modalName: string) => {
  trackEvent('modal_open', {
    modal_name: modalName,
    timestamp: new Date().toISOString(),
  });
};

export const trackModalClose = (modalName: string, timeSpent?: number) => {
  trackEvent('modal_close', {
    modal_name: modalName,
    time_spent_seconds: timeSpent,
    timestamp: new Date().toISOString(),
  });
};
