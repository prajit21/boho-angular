import { Routes } from '@angular/router';

import { Chat } from './chat/chat';
import { VideoChat } from './video-chat/video-chat';

export default [
  {
    path: 'chat-app',
    component: Chat,
    data: {
      title: 'Chat App',
      breadcrumb: 'Chat App',
    },
  },
  {
    path: 'video-chat',
    component: VideoChat,
    data: {
      title: 'Video Chat',
      breadcrumb: 'Video Chat',
    },
  },
] as Routes;
