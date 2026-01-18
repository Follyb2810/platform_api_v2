export function authMiddleware(req: any, res: any, next: any) {
  // TODO: verify Supabase JWT here
  // For now, mock user
  req.user = { sub: "user-id-from-jwt" };
  next();
}

// export function authMiddleware(req,res,next){ next(); }
