export interface NotificationStateDTO {
  id: number;
  type: string;
  text: string;
  created_at: string;
  is_read: boolean;
}

export interface NotificationTypeViewProfileDTO {
  readonly type: string;
  text: string;
  created_at: string;
  is_read: boolean;
  profile_id: number;
}

export interface NotificationTypeLikeProfileDTO {
  readonly type: string;
  text: string;
  created_at: string;
  is_read: boolean;
  profile_id: number;
}
