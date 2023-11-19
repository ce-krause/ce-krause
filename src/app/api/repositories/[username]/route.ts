import { Exception } from '@/classes'
import { OctokitController } from '@/controllers'
import { NextRequest, NextResponse } from 'next/server'

type ResponseType = { params: { username: string } }

export const GET = async (req: NextRequest, res: ResponseType) => {
  try {
    return NextResponse.json(
      await OctokitController.getRepositories(res.params.username)
    )
  } catch (ex) {
    return NextResponse.json(Exception.handleException(ex))
  }
}
