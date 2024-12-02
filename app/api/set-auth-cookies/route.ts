import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { accessToken, refreshToken } = await request.json();

    // Create response with cookie setting
    const response = NextResponse.json({ 
      message: 'Cookies set successfully' 
    });
    console.log('process.env.Node_ENV:', process.env.NODE_ENV);
    console.log('process.env.COOKIE_DOMAIN:', process.env.COOKIE_DOMAIN);
    // Set access token cookie with domain
    response.cookies.set('accessToken2', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60, // 1 hour
      domain: process.env.COOKIE_DOMAIN || 'localhost', // Add domain here
      path: '/'
    });

    // Set refresh token cookie with domain
    response.cookies.set('refreshToken2', refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 60 * 60 * 24 * 30, // 30 days
      domain: process.env.COOKIE_DOMAIN || 'localhost', // Add domain here
      path: '/'
    });

    return response;
  } catch (error) {
    console.error('Cookie setting error:', error);
    return NextResponse.json(
      { error: 'Failed to set cookies' }, 
      { status: 500 }
    );
  }
}